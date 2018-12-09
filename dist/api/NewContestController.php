<?php

    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/MusikuiRepository.php");

    class NewContestController {
        public static function add_new_contest($publish_date, $comment, $musikui_texts) {
        }
    }
    // GET
    if(count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if($mapping == "get_recent_contest") {
            $amount = $_GET["amount"];
            $json = NewContestController::get_recent_contest($amount);
            echo $json;
        }
    }

    // POST
    if(count($_POST) > 0){
    // $mapping = $_POST["mapping"];
    // if($mapping == "get_recent_contest") {
    //     $amount = $_POST["amount"];
    //     $json = NewContestController::get_recent_contest($amount);
    //     echo $json;
    // }
    }


?>