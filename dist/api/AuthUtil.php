<?php

    class AuthUtil {

        public static function is_admin() {
            session_start();
            if (!isset($_SESSION["is_admin"])) {
                return false;
            }
            if (!$_SESSION["is_admin"]) {
                return false;
            }
            return true;
        }

    }

?>