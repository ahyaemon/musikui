<?php

    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/MusikuiRepository.php");
    require_once(Path::web()."/mapper/MusikuiWebMapper.php");

    class MusikuiMgrController {

        public static function get_musikuis() {
            $musikuis = MusikuiRepository::find_all();
            return json_encode($musikuis);
        }

        public static function add_musikuis($musikui_texts) {
            $musikuis = array_map(function($musikui_text) {
                return MusikuiWebMapper::from_text($musikui_text);
            }, $musikui_texts);
            MusikuiRepository::add_all($musikuis);
            return json_encode(true);
        }

    }

    // GET
    if(count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if ($mapping == "get_musikuis") {
            $json = MusikuiMgrController::get_musikuis();
            echo $json;
        }
    }

    // POST
    if(count($_POST) > 0){
        $mapping = $_POST["mapping"];
        if ($mapping == "add_musikuis") {
            $musikui_texts = json_decode($_POST["musikui_texts"]);
            $json = MusikuiMgrController::add_musikuis($musikui_texts);
            echo $json;
        }
    }

?>