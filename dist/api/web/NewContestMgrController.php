<?php

    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::root()."/AuthUtil.php");
    require_once(Path::infra()."/ContestRepository.php");
    require_once(Path::infra()."/MusikuiRepository.php");
    require_once(Path::web()."/mapper/MusikuiWebMapper.php");
    session_start();

    class NewContestMgrController {

        /**
         * 現在掲載中のコンテストを取得する
         * {
         *   recent_contests: [],
         *   current_contest_id: 0
         * }
         */
        public static function get_recent_contests($amount) {
            $recent_contests = ContestRepository::find_recent_contests($amount);
            return json_encode($recent_contests);
        }

        /**
         * 現在掲載中のコンテストを変更する
         */
        public static function update_current_contest_id($contest_id) {
            ContestRepository::update_current_contest_id($contest_id);
            return json_encode(true);
        }

        /**
         * 新しいコンテストを登録する
         * 掲載中のコンテストは変更しない
         */
        public static function add_new_contest($musikui_texts, $date, $comment) {
            $musikuis = array_map(function($musikui_text) {
                return MusikuiWebMapper::from_text($musikui_text);
            }, $musikui_texts);
            $musikui_ids = MusikuiRepository::add_all($musikuis);

            $contest = [
                "date" => $date,
                "comment" => $comment
            ];
            $contest_id = ContestRepository::add_one($contest);

            $contest_musikuis = array();
            for($i = 0; $i < count($musikui_ids); $i++) {
                $contest_musikui = [
                    "contest_id" => $contest_id,
                    "musikui_id" => $musikui_ids[$i],
                    "question_number" => $i + 1
                ];
                array_push($contest_musikuis, $contest_musikui);
            }
            ContestRepository::add_contest_musikuis($contest_musikuis);

            return json_encode(true);
        }
    }

    // 管理者ロール確認
    if (!AuthUtil::is_admin($_SESSION)) {
        http_response_code(403);
        return;
    }

    // GET
    if(count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if ($mapping == "get_recent_contests") {
            $amount = $_GET["amount"];
            $json = NewContestMgrController::get_recent_contests($amount);
            echo $json;
        }
    }

    // POST
    if(count($_POST) > 0){
        $mapping = $_POST["mapping"];
        if ($mapping == "update_current_contest_id") {
            $contest_id = $_POST["contest_id"];
            $json = NewContestMgrController::update_current_contest_id($contest_id);
            echo $json;
        }
        else if ($mapping == "add_new_contest") {
            $musikui_texts = json_decode($_POST["musikui_texts"]);
            $date = $_POST["date"];
            $comment = $_POST["comment"];
            $json = NewContestMgrController::add_new_contest($musikui_texts, $date, $comment);
            echo $json;
        }
    }

?>