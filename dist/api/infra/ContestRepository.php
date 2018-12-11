<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/SqlExecuter.php");
    require_once(Path::infra()."/ContestSql.php");
    require_once(Path::infra()."/ContestMapper.php");

    class ContestRepository {

        public static function find_current_contest_id() {
            $sql = ContestSql::select_current_contest_id();
            return SqlExecuter::select_one($sql)["contest_id"];
        }

        public static function find_contest_by_id($contest_id) {
            $sql = ContestSql::select_contest_by_id($contest_id);
            $result = SqlExecuter::select($sql);
            $contest = ContestMapper::to_contest($result);
            return $contest;
        }

        public static function find_contest_infos() {
            $sql = "SELECT * FROM contest ORDER BY id DESC";
            $result = SqlExecuter::select($sql);
            $infos = array_map(function($record) {
                return [
                    "contest_number" => $record["id"],
                    "date" => $record["date"]
                ];
            }, $result);
            return $infos;
        }

        /**
         * {
         *     musikui: ...
         *     date: "2018/12/11"
         *     question_number: 1
         * }
         */
        public static function search_by_condition($condition) {
            $sql = ContestSql::search_by_condition($condition);
            $result = SqlExecuter::select($sql);
            $musikuis_with_contest_info = ContestMapper::to_musikuis_with_contest_info($result);
            return $musikuis_with_contest_info;
        }

    }
?>