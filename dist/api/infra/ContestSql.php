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
                ORDER BY
                    c.id,
                    m.id,
                    r.answer_datetime
            ";
            return $sql;
        }

        public static function select_current_contest_id() {
            $sql = "SELECT contest_id FROM current";
            return $sql;
        }

        public static function select_contest_infos() {
            $sql = "SELECT * FROM contest ORDER BY id DESC";
            return $sql;
        }

        public static function search_by_condition($condition, $remove_musikui_ids) {
            $mark_in_sql = "";
            $plus_selected = $condition->plus_selected;
            $multiple_selected = $condition->multiple_selected;
            $divide_selected = $condition->multiple_selected;
            $selected_marks = [];
            if ($condition->plus_selected) {
                array_push($selected_marks, "'plus'");
            }
            if ($condition->multiple_selected) {
                array_push($selected_marks, "'multiple'");
            }
            if ($condition->divide_selected) {
                array_push($selected_marks, "'divide'");
            }
            if (count($selected_marks) > 0) {
                $marks = implode(", ", $selected_marks);
                $mark_in_sql = "AND musikui.mark IN ($marks)";
            }

            $not_in = "";
            if (count($remove_musikui_ids) > 0) {
                $quoted = array_map(function($id) {
                    return "'${id}'";
                }, $remove_musikui_ids);
                $joinned = implode(", ", $quoted);
                $not_in = " AND musikui.id NOT IN (${joinned})";
            }

            $sql = "
                SELECT
                    contest.id as contest_id,
                    contest.date,
                    contest_musikui.question_number,
                    musikui.id as musikui_id,
                    musikui.level,
                    musikui.formula,
                    musikui.comment as musikui_comment,
                    musikui.mark,
                    musikui.formula,
                    musikui.hissan_question,
                    respondent.id as respondent_id,
                    respondent.name as respondent_name,
                    respondent.comment as respondent_comment,
                    respondent.answer_datetime
                FROM
                    musikui
                    INNER JOIN
                        contest_musikui
                        ON
                            musikui.id = contest_musikui.musikui_id
                    INNER JOIN
                        contest
                        ON
                            contest_musikui.contest_id = contest.id
                    INNER JOIN
                        respondent
                        ON
                            respondent.musikui_id = musikui.id
                WHERE
                    musikui.level >= '{$condition->min_level}' AND
                    musikui.level <= '{$condition->max_level}' AND
                    musikui.ncol >= '{$condition->min_col}' AND
                    musikui.ncol <= '{$condition->max_col}'
                    {$mark_in_sql}
                    {$not_in}
                ORDER BY
                    contest.id,
                    musikui.id,
                    respondent.answer_datetime
            ";
            return $sql;
        }

        public static function find_recent_contests($amount) {
            $sql = "
            SELECT
                contest.id,
                contest.date,
                current.contest_id = contest.id as is_current
            FROM
                contest
                LEFT OUTER JOIN
                    current
                    ON
                        contest.id = current.contest_id
            ORDER BY
                contest.date DESC
            LIMIT
                ${amount}
            ";
            return $sql;
        }

        public static function update_current_contest_id($contest_id) {
            $sql = "UPDATE current SET contest_id = '$contest_id'";
            return $sql;
        }

        public static function insert_one($contest) {
            $date = $contest["date"];
            $comment = $contest["comment"];
            return "
                INSERT INTO contest
                    (date, comment)
                VALUES
                    ('${date}', '${comment}')
            ";
        }

        public static function select_id_one($contest) {
            $date = $contest["date"];
            return "
                SELECT
                    id
                FROM
                    contest
                WHERE
                    date = '${date}'
            ";
        }

        public static function insert_contest_musikui($contest_musikuis) {
            $values = array_map(function($contest_musikui) {
                $sql = "(";
                $sql .= "'".$contest_musikui["contest_id"]."',\n";
                $sql .= "'".$contest_musikui["musikui_id"]."',\n";
                $sql .= "'".$contest_musikui["question_number"]."'\n";
                $sql .= ")";
                return $sql;
            }, $contest_musikuis);
            $joinned_values = implode(",\n", $values);

            return "
                INSERT INTO contest_musikui
                    (contest_id, musikui_id, question_number)
                VALUES
                    ${joinned_values}
            ";
        }

        public static function select_formula_by_musikui_id($musikui_id) {
            return "
                SELECT
                    formula
                FROM
                    musikui
                WHERE
                    id = '${musikui_id}'
            ";
        }

    }
?>