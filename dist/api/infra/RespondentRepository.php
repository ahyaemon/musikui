<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/SqlExecuter.php");
    require_once(Path::infra()."/RespondentSql.php");

    class RespondentRepository {

        public static function add_one($respondent) {
            $insert_sql = RespondentSql::insert_one($respondent);
            SqlExecuter::insert($insert_sql);
        }

    }

?>