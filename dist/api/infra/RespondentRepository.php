<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/SqlExecuter.php");
    require_once(Path::infra()."/RespondentSql.php");

    class RespondentRepository {

        public static function add_one($respondent) {
            $insert_sql = RespondentSql::insert_one($respondent);
            SqlExecuter::insert($insert_sql);
        }

        public static function find_by_musikui_id($musikui_id) {
            $sql = RespondentSql::select_by_musikui_id($musikui_id);
            $respondents = SqlExecuter::select($sql);
            return $respondents;
        }

    }

?>