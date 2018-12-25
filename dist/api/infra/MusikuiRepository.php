<?php
    require_once(dirname(__FILE__)."/../Path.php");
    require_once(Path::infra()."/SqlExecuter.php");
    require_once(Path::infra()."/MusikuiSql.php");
    class MusikuiRepository {

        public static function find_all() {
            $sql = MusikuiSql::find_all();
            $result = SqlExecuter::select($sql);
            return $result;
        }

        /**
         * 最大レベルと最大列数から、musikuiを検索する
         */
        public static function find_max_level_and_col() {
            $sql = MusikuiSql::find_max_level_and_col();
            $result = SqlExecuter::select_one($sql);
            return $result;
        }

        /**
         * $musikuis を musikui テーブルに登録する
         * 登録後、新規発行された id を返却する
         */
        public static function add_all($musikuis) {
            $insert_sql = MusikuiSql::insert($musikuis);
            SqlExecuter::insert($insert_sql);
            $select_sql = MusikuiSql::select_id($musikuis);
            $result = SqlExecuter::select($select_sql);
            return array_map(function($record) {
                return $record["id"];
            }, $result);
        }

        public static function find_by_ids($ids) {
            $sql = MusikuiSql::select_by_ids($ids);
            $result = SqlExecuter::select($sql);
            $musikuis = array_map(function($record) {
                return [
                    "id" => $record["id"],
                    "level" => $record["level"],
                    "mark" => $record["mark"],
                    "comment" => $record["comment"],
                    "formula" => json_decode($record["formula"]),
                    "hissan_question" => [
                        "rows" => json_decode($record["hissan_question"])
                    ],
                    "hissan_answer" => [
                        "rows" => json_decode($record["hissan_answer"])
                    ],
                    "ncol" => $record["ncol"],
                    "nrow" => $record["nrow"]
                ];
            }, $result);
            return $musikuis;
        }

    }
?>