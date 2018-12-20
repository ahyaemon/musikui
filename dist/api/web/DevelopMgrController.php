<?php

    class DevelopMgrController {

        public static function get_session_contents() {
            session_start();
            return json_encode($_SESSION);
        }

        public static function destroy_session() {
            session_start();
            session_destroy();
            return json_encode(true);
        }

    }

    // GET
    if (count($_GET) > 0){
        $mapping = $_GET["mapping"];
        if ($mapping == "get_session_contents") {
            $json = DevelopMgrController::get_session_contents();
            echo $json;
        }
    }
    // POST
    if (count($_POST) > 0){
        $mapping = $_POST["mapping"];
        if ($mapping == "destroy_session") {
            $json = DevelopMgrController::destroy_session();
            echo $json;
        }
    }

?>