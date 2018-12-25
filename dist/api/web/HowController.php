<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/MusikuiRepository.php");

    class HowController {

        public static function get_musikuis($ids) {
            $musikuis = MusikuiRepository::find_by_ids($ids);
            return json_encode($musikuis);
        }

    }

    // GET
    if (count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if ($mapping == "get_musikuis") {
            $ids = $_GET["ids"];
            $json = HowController::get_musikuis($ids);
            echo $json;
        }
    }
    // POST
    if (count($_POST) > 0){
        $mapping = $_POST["mapping"];
    }

?>