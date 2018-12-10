<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/MusikuiRepository.php");
    require_once(Path::infra()."/ContestRepository.php");
    // require_once(Path::utils()."/MusikuiUtils.php");

    class SearchQuestionController {

        /**
         * max_level, max_colを返す
         */
        public static function get_max_level_and_col() {
            $max_level_and_col = MusikuiRepository::find_max_level_and_col();
            return json_encode($max_level_and_col);
        }

        /**
         * これまでの問題をサマリーして返す
         * 日付だけかえせばオーケー
         */
        public static function get_contest_infos() {
            $contest_infos = ContestRepository::find_contest_infos();
            return json_encode($contest_infos);
        }

    }

    if(count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if($mapping == "get_max_level_and_col") {
            $json = SearchQuestionController::get_max_level_and_col();
            echo $json;
        }
        else if ($mapping == "get_contest_infos") {
            $json = SearchQuestionController::get_contest_infos();
            echo $json;
        }
    }

?>