<?php

    class MusikuiSql {

        public static function find_max_level_and_col() {
            $sql = "
SELECT
  MAX(level) as max_level,
  MAX(ncol) as max_col
FROM
  musikui
            ";
            return $sql;
        }

    }

?>