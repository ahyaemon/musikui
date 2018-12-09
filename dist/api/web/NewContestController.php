<?php

    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/ContestRepository.php");

    class NewContestController {
        public static function get() {
            // 今週の問題のIDを取得
            $current_contest_id = ContestRepository::find_current_contest_id();

            // IDからContestを取得
            $current_contest = ContestRepository:: find_by_id($current_contest_id);

            // 先週のContestを取得
            $prev_contest = ContestRepository::find_by_id($current_contest_id - 1);

            $new_contest = [
                "current_contest" => $current_contest,
                "prev_contest" => $prev_contest
            ];

            return json_encode($new_contest);
        }
    }
    // GET
    if(count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if($mapping == "get_recent_contest") {
            $json = NewContestController::get();
            echo $json;
        }
    }

    // POST
    if(count($_POST) > 0){
        $mapping = $_POST["mapping"];
    }


?>