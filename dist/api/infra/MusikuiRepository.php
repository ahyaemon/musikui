<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/SqlExecuter.php");
    require_once(Path::infra()."/MusikuiSql.php");
    class MusikuiRepository {

        public static function find_max_level_and_col() {
            $sql = MusikuiSql::find_max_level_and_col();
            $result = SqlExecuter::select_one($sql);
            return $result;
        }

    }
?>