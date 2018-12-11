<?php

    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/ContestRepository.php");

    class SearchResultController {
        public static function search_question($condition) {
            $contests = ContestRepository::search_by_condition($condition);
            return json_encode($contests);
        }
    }
    // GET
    if(count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if($mapping == "search_question") {
            $condition = json_decode($_GET["condition"]);
            $json = SearchResultController::search_question($condition);
            echo $json;
        }
    }

    // POST
    if(count($_POST) > 0){
        $mapping = $_POST["mapping"];
    }


?>