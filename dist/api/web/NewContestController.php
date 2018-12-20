<?php

    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/ContestRepository.php");
    require_once(Path::infra()."/RespondentRepository.php");
    require_once(Path::web()."/NewContestValidator.php");

    class NewContestController {
        public static function get() {
            // 今週の問題のIDを取得
            $current_contest_id = ContestRepository::find_current_contest_id();

            // IDからContestを取得
            $current_contest = ContestRepository:: find_contest_by_id($current_contest_id);

            // 先週のContestを取得
            $prev_contest = ContestRepository::find_contest_by_id($current_contest_id - 1);

            $new_contest = [
                "current_contest" => $current_contest,
                "prev_contest" => $prev_contest
            ];

            return json_encode($new_contest);
        }

        /**
         * 正解した場合、セッションに時間を詰める
         */
        public static function is_correct_answer($musikui_id, $formula) {
            $validation_errors = NewContestValidator::is_correct_answer_validation($formula);
            if (count($validation_errors) > 0) {
                return json_encode(["errors" => $validation_errors]);
            }

            $correct_formula = ContestRepository::find_answer($musikui_id);
            $answer_errors = NewContestValidator::check_answer($formula, $correct_formula);
            if (count($answer_errors) > 0) {
                return json_encode(["errors" => $validation_errors]);
            }

            session_start();
            date_default_timezone_set("Asia/Tokyo");
            $answer_datetime = date("Y/m/d His");

            // 既にコメント済みの場合は、commented = true でセッションに保存
            $key = "m-".$musikui_id;
            $commented = false;
            if (isset($_SESSION[$key])) {
                if (isset($_SESSION[$key]["commented"])){
                    $commented = $_SESSION[$key]["commented"];
                }
            }

            $_SESSION[$key] = [
                "answer_datetime" => $answer_datetime,
                "commented" => $commented
            ];
            return json_encode([
                "is_correct" => true,
                "answer_datetime" => $answer_datetime
            ]);
        }

        public static function add_respondent($name, $comment, $musikui_id) {
            session_start();
            $key = "m-".$musikui_id;

            // バリデーション
            $validation_errors = NewContestValidator::respondent_validation($name, $_SESSION, $key);
            if (count($validation_errors) > 0) {
                return json_encode(["errors" => $validation_errors]);
            }

            // respondent登録
            $answer_datetime = $_SESSION[$key]["answer_datetime"];
            $respondent = [
                "musikui_id" => $musikui_id,
                "name" => $name,
                "comment" => $comment,
                "answer_datetime" => $answer_datetime
            ];
            RespondentRepository::add_one($respondent);

            // 2重登録防止用に、commented を trueにする
            $_SESSION[$key] = [
                "answer_datetime" => $answer_datetime,
                "commented" => true
            ];
            return json_encode(true);
        }
    }

    // GET
    if (count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if ($mapping == "get") {
            $json = NewContestController::get();
            echo $json;
        }
        else if ($mapping == "is_correct_answer") {
            $musikui_id = $_GET["musikui_id"];
            $formula = json_decode($_GET["formula"]);
            $json = NewContestController::is_correct_answer($musikui_id, $formula);
            echo $json;
        }
    }
    // POST
    if (count($_POST) > 0){
        $mapping = $_POST["mapping"];
        if ($mapping == "add_respondent") {
            $name = $_POST["name"];
            $comment = $_POST["comment"];
            $musikui_id = $_POST["musikui_id"];
            $json = NewContestController::add_respondent($name, $comment, $musikui_id);
            echo $json;
        }
    }

?>