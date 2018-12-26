<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/SqlExecuter.php");
    require_once(Path::infra()."/AuthSql.php");

    class AuthRepository {

        public static function find_password_hash($name) {
            $sql = AuthSql::select_password_hash($name);
            $result = SqlExecuter::select_one($sql)["password"];
            return $result;
        }

    }

?>