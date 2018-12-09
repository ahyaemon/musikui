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


        public static function insert($contests) {
            $sql = "
INSERT INTO contest
  (date, comment)
VALUES
            ";
            $contests = array_values($contests);
            $count = count($contests);
            for($i = 0; $i < $count; $i++) {
                $contest = $contests[$i];
                $sql .= "  (\n";
                $sql .= "'".$contest["date"]."',\n";
                $sql .= "'".$contest["comment"]."'\n";
                $sql .= ")";
                if($i == $count - 1) {
                    $sql .= "\n";
                }
                else {
                    $sql .= ",\n";
                }
            }
            return $sql;
        }

        public static function select_id($contests) {
            $sql = "
SELECT
  id
FROM
  contest
            ";
            $sql .= "WHERE\n";
            $sql .= "  date IN (";
            $sql .= implode(", ", array_map(function($contests) {
                return "'".$contests["date"]."'";
            }, $contests));
            $sql .= ")";
            return $sql;
        }

        public static function insert_contest_musikui($contest_musikuis) {
            $sql = "
INSERT INTO contest_musikui
  (contest_id, musikui_id, question_number)
VALUES
            ";
            $contest_musikuis = array_values($contest_musikuis);
            $count = count($contest_musikuis);
            for($i = 0; $i < $count; $i++) {
                $contest_musikui = $contest_musikuis[$i];
                $sql .= "  (\n";
                $sql .= "'".$contest_musikui["contest_id"]."',\n";
                $sql .= "'".$contest_musikui["musikui_id"]."',\n";
                $sql .= "'".$contest_musikui["question_number"]."'\n";
                $sql .= ")";
                if($i == $count - 1) {
                    $sql .= "\n";
                }
                else {
                    $sql .= ",\n";
                }
            }
            return $sql;
        }

        public static function select_recent_contest($amount) {
            $sql = "
SELECT
  co.id,
  co.date,
  cu.contest_id
FROM
  contest co
  LEFT OUTER JOIN
    current cu
    ON
      co.id = cu.contest_id
ORDER BY
  co.date
    DESC
            ";
            $sql .= "LIMIT\n";
            $sql .= "  ".$amount;
            return $sql;
        }

        public static function update_current_contest($contest_id) {
            $sql = "UPDATE current SET contest_id = '$$contest_id'";
            return $sql;
        }

        public static function find_date_by_contest_id($contest_id) {
            $sql = "SELECT date FROM contest WHERE id = '$contest_id'";
            return $sql;
        }

        public static function select_current_contest_id() {
            $sql = "SELECT contest_id FROM current";
            return $sql;
        }

    }
?>