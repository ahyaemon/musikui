<?php

    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/ContestRepository.php");

    class OldContestController {
        public static function get_by_contest_id($contest_id) {
            // IDからContestを取得
            $contest = ContestRepository:: find_contest_by_id($contest_id);
            return json_encode($contest);
        }
    }
    // GET
    if(count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if($mapping == "get_by_contest_id") {
            $contest_id = $_GET["contest_id"];
            $json = OldContestController::get_by_contest_id($contest_id);
            echo $json;
        }
    }

    // POST
    if(count($_POST) > 0){
        $mapping = $_POST["mapping"];
    }


?>