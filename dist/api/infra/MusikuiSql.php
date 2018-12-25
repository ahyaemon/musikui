<?php

    class MusikuiSql {

        public static function find_all() {
            return "
                SELECT
                    *
                FROM
                    musikui
                ORDER BY
                    id DESC
            ";
        }

        public static function find_max_level_and_col() {
            return "
                SELECT
                    MAX(level) as max_level,
                    MAX(ncol) as max_col
                FROM
                    musikui
            ";
        }

        public static function insert($musikuis) {
            $values = array_map(function($musikui) {
                $sql = "(";
                $sql .= "'".$musikui["level"]."', ";
                $sql .= "'".$musikui["comment"]."', ";
                $sql .= "'".$musikui["mark"]."', ";
                $sql .= "'".$musikui["formula"]."', ";
                $sql .= "'".$musikui["hissan_question"]."', ";
                $sql .= "'".$musikui["hissan_answer"]."', ";
                $sql .= "'".$musikui["nrow"]."', ";
                $sql .= "'".$musikui["ncol"]."'";
                $sql .= ")";
                return $sql;
            }, $musikuis);
            $joinned_values = implode(",\n", $values);

            return "
                INSERT INTO musikui
                    (level, comment, mark, formula, hissan_question, hissan_answer, nrow, ncol)
                VALUES
                    ${joinned_values}
            ";
        }

        public static function select_id($musikuis) {
            $conditions = array_map(function($musikui) {
                return "'".$musikui["hissan_question"]."'";
            }, $musikuis);
            $joinned_conditions = implode(", ", $conditions);
            return "
                SELECT
                    id
                FROM
                    musikui
                WHERE
                    hissan_question IN (${joinned_conditions})
            ";
        }

        public static function select_by_ids($ids) {
            $quoted = array_map(function($id) {
                return "'".$id."'";
            }, $ids);
            $joinned = implode(", ", $quoted);
            return "
                SELECT
                    *
                FROM
                    musikui
                WHERE
                    id IN (${joinned})
            ";
        }

    }

?>