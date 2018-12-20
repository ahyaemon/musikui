<?php

    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/MusikuiRepository.php");

    class MusikuiMgrController {
        public static function get_musikuis() {
            $musikuis = MusikuiRepository::find_all();
            return json_encode($musikuis);
        }
    }
    // GET
    if(count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if($mapping == "get_musikuis") {
            $json = MusikuiMgrController::get_musikuis();
            echo $json;
        }
    }

    // POST
    if(count($_POST) > 0){
        $mapping = $_POST["mapping"];
    }

?>