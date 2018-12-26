<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::root()."/AuthUtil.php");
    session_start();

    class DevelopMgrController {

        public static function get_session_contents() {
            return json_encode($_SESSION);
        }

        public static function destroy_session() {
            session_destroy();
            return json_encode(true);
        }

    }

    // 管理者ロール確認
    if (!AuthUtil::is_admin($_SESSION)) {
        http_response_code(403);
        return;
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