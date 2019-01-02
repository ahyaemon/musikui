<?php
    class RespondentSql {

        public static function insert_one($respondent) {
            $musikui_id = $respondent["musikui_id"];
            $name = $respondent["name"];
            $comment = $respondent["comment"];
            $answer_datetime = $respondent["answer_datetime"];
            return "
                INSERT INTO respondent
                    (musikui_id, name, comment, answer_datetime)
                VALUES
                    ('$musikui_id', '$name', '$comment', '$answer_datetime')
            ";
        }

        public static function select_by_musikui_id($musikui_id) {
            return "
                SELECT
                  *
                FROM
                  respondent
                WHERE
                  musikui_id = ${musikui_id}
            ";
        }

    }

?>
