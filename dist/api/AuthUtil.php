<?php

    class AuthUtil {

        public static function is_admin($session) {
            if (!isset($session["is_admin"])) {
                return false;
            }
            if (!$session["is_admin"]) {
                return false;
            }
            return true;
        }

    }

?>