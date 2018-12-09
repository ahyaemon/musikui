<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/SqlExecuter.php");
    require_once(Path::infra()."/ContestSql.php");
    class ContestRepository {

        public static function find_current_contest() {
            $sql = ContestSql::select_current_contest_id();
            $current_contest_id = SqlExecuter::select_one($sql)["contest_id"];
            return ContestRepository::find_contest_by_id($current_contest_id);

        }

        public static function find_contest_by_id($contest_id) {
            $sql = ContestSql::select_contest_by_id($contest_id);
            $result = SqlExecuter::select($sql);

            // musikui_idに対して、respondentを集約する
            $all_respondents = [];
            foreach($result as $record) {
                $key = $record["musikui_id"];
                $key2 = $record["respondent_id"];
                $value = [
                    "id" => $record["respondent_id"],
                    "name" => $record["respondent_name"],
                    "comment" => $record["respondent_comment"],
                    "answer_datetime" => $record["answer_datetime"]
                ];
                $all_respondents[$key][$key2] = $value;
            }
            $all_respondents = array_map(function($respondent) {
                return array_values($respondent);
            }, $all_respondents);

            // musikuis作成
            // formulaの内容を 0 に置き換える
            $musikui_ids = array_unique(array_map(function($record) {
                return $record["musikui_id"];
            }, $result));
            $musikuis = [];
            foreach($musikui_ids as $musikui_id) {
                $target_record = array_values(array_filter($result, function($record) use($musikui_id) {
                    return $record["musikui_id"] == $musikui_id;
                }))[0];
                // 回答はすべての項を 0 にしておく（答えがクライアントに渡らないように）
                $formula = json_decode($target_record["formula"]);
                $lefts = array_map(function($left) {
                    return 0;
                }, $formula->lefts);
                $formula = [
                    "right" => 0,
                    "lefts" => $lefts
                ];
                $musikui_id = $target_record["musikui_id"];
                $respondents = $all_respondents[$musikui_id];
                $musikui = [
                    "id" => $musikui_id,
                    "level" => $target_record["level"],
                    "comment" => $target_record["musikui_comment"],
                    "formula" => $formula,
                    "mark" => $target_record["mark"],
                    "hissan_question" => json_decode($target_record["hissan_question"]),
                    "respondents" => $respondents
                ];
                array_push($musikuis, $musikui);
            }

            // contest 作成
            $contest = [
                "id" => $result[0]["contest_id"],
                "date" => $result[0]["contest_date"],
                "comment" => $result[0]["contest_comment"],
                "musikuis" => $musikuis
            ];
            return $contest;
        }

        /**
         * コンテストを登録する
         * @return 新規採番されたidを返す
         */
        public static function add_one($contest) {
            $insert_sql = ContestSql::insert([$contest]);
            SqlExecuter::insert($insert_sql);
            $select_sql = ContestSql::select_id([$contest]);
            $ids = SqlExecuter::select($select_sql);
            return $ids[0]["id"];
        }

        /**
         * コンテスト-虫食い関連テーブルを登録する
         */
        public static function add_contest_musikuis($contest_musikuis) {
            $insert_sql = ContestSql::insert_contest_musikui($contest_musikuis);
            SqlExecuter::insert($insert_sql);
        }

        public static function find_recent_contest($amount) {
            $sql = ContestSql::select_recent_contest($amount);
            $result = SqlExecuter::select($sql);
            // currentかどうかの判断をする
            $result = array_map(function($record) {
                if(isset($record["contest_id"])) {
                    $record["current"] = true;
                }
                else {
                    $record["current"] = false;
                }
                return $record;
            }, $result);

            return $result;
        }

        public static function update_current_contest($contest_id) {
            $sql = ContestSql::update_current_contest($contest_id);
            SqlExecuter::update($sql);
        }

        public static function find_date_by_contest_id($contest_id) {
            $sql = ContestSql::find_date_by_contest_id($contest_id);
            return SqlExecuter::select_one($sql)["date"];
        }

        public static function find_current_contest_id() {
            $sql = ContestSql::select_current_contest_id();
            return SqlExecuter::select_one($sql)["contest_id"];
        }

        public static function find_old_contest_infos() {
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

    }
?>