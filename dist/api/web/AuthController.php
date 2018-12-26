<?php

    class AuthController {

        public static function login($name, $password) {
            if ($name != "testman") {
                return json_encode([
                    "error_fields" => [["field" => "name", "message" => "なんかちがう"]]
                ]);
            }

            if ($password != "testpass") {
                return json_encode([
                    "error_fields" => [["field" => "password", "message" => "なんかちがう"]]
                ]);
            }

            session_start();
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