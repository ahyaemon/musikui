<?php
    class AuthSql {

        public static function select_password_hash($name) {
            return "
                SELECT
                    password
                FROM
                    admin
                WHERE
                    name = '${name}'
            ";
        }

    }

?>
