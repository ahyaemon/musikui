<?php

    class ContestSql {
        public static function select_contest_by_id($id) {
            $sql = "
SELECT
  c.id as contest_id,
  c.date as contest_date,
  c.comment as contest_comment,
  cm.question_number,
  m.id as musikui_id,
  m.level,
  m.comment as musikui_comment,
  m.mark,
  m.formula,
  m.hissan_question,
  r.id as respondent_id,
  r.name as respondent_name,
  r.comment as respondent_comment,
  r.answer_datetime

FROM
  contest c
  INNER JOIN
    contest_musikui cm
    ON
      c.id = cm.contest_id
  INNER JOIN
    musikui m
    ON
      cm.musikui_id = m.id
  LEFT OUTER JOIN
    respondent r
    ON
      m.id = r.musikui_id
WHERE
  c.id = '$id'
            ";
            return $sql;
        }

        public static function select_current_contest_id() {
            $sql = "SELECT contest_id FROM current";
            return $sql;
        }

    }
?>