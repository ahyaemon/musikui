<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/AuthRepository.php");
    session_start();

    class AuthController {

        /**
         * 入力されたアカウント情報が正しいかどうかを確認するログイン処理
         */
        public static function login($name, $password) {
            // nameからpassword_hashを取得する
            $password_hash = AuthRepository::find_password_hash($name);
            if ($password_hash == null) {
                return json_encode([
                    "error_fields" => [["field" => "name", "message" => "なんかちがう"]]
                ]);
            }

            // passwordとpassword_hashを突き合わせる
            if (!password_verify($password, $password_hash)) {
                return json_encode([
                    "error_fields" => [["field" => "password", "message" => "なんかちがう"]]
                ]);
            }

            $_SESSION["is_admin"] = true;
            return json_encode(true);
        }

    }

    // GET
    if (count($_GET) > 0){
        $mapping = $_GET["mapping"];
    }

    // POST
    if (count($_POST) > 0){
        $mapping = $_POST["mapping"];
        if ($mapping == "login") {
            $name = $_POST["name"];
            $password = $_POST["password"];
            $json = AuthController::login($name, $password);
            echo $json;
        }
    }

?>