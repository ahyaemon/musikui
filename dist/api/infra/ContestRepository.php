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
         * howページで使用しているmusikuiは結果から取り除く必要がある
         */
        public static function search_by_condition($condition) {
            $remove_musikui_ids = [];
            $sql = ContestSql::search_by_condition($condition, $remove_musikui_ids);
            $result = SqlExecuter::select($sql);
            $musikuis_with_contest_info = ContestMapper::to_musikuis_with_contest_info($result);
            return $musikuis_with_contest_info;
        }

        public static function find_recent_contests($amount) {
            $sql = ContestSql::find_recent_contests($amount);
            $result = SqlExecuter::select($sql);
            $contests = array_map(function($record) {
                return [
                    "id" => $record["id"],
                    "date" => $record["date"]
                ];
            }, $result);
            $current_contest_id = array_values(array_filter($result, function($record) {
                return $record["is_current"] == "1";
            }))[0]["id"];
            $recent_contests = [
                "contests" => $contests,
                "current_contest_id" => $current_contest_id
            ];
            return $recent_contests;
        }

        public static function update_current_contest_id($contest_id) {
            $sql = ContestSql::update_current_contest_id($contest_id);
            SqlExecuter::update($sql);
        }

        /**
         * コンテストを登録する
         * @return 新規採番されたidを返す
         */
        public static function add_one($contest) {
            $insert_sql = ContestSql::insert_one($contest);
            SqlExecuter::insert($insert_sql);
            $select_sql = ContestSql::select_id_one($contest);
            $id = SqlExecuter::select_one($select_sql);
            return $id["id"];
        }

        /**
         * コンテスト-虫食い関連テーブルを登録する
         */
        public static function add_contest_musikuis($contest_musikuis) {
            $insert_sql = ContestSql::insert_contest_musikui($contest_musikuis);
            SqlExecuter::insert($insert_sql);
        }

        public static function find_answer($musikui_id) {
            $sql = ContestSql::select_formula_by_musikui_id($musikui_id);
            $result = SqlExecuter::select_one($sql);
            $formula = json_decode($result["formula"]);
            return $formula;

        }

    }
?>