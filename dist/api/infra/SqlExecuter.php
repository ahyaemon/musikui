<?php
    require_once(dirname(__FILE__)."/../Path.php");

    class SqlExecuter {

        private static function create_connection() {
            return new SQLite3(Path::db()."/musikui.db");
        }

        public static function select($sql) {
            $con = SqlExecuter::create_connection();
            $records = array();

            $result = $con->query($sql);
            if(!$result) {
                return $records;
            }

            while ($record = $result->fetchArray()){
                /**
                 * indexがキーになっている要素は削除
                 */
                $record_without_index = [];
                foreach ($record as $key => $value) {
                    if (preg_match("/^\d+$/", $key) == 0) {
                        $record_without_index[$key] = $value;
                    }
                }
                array_push($records, $record_without_index);
            }
            return $records;
        }

        public static function select_one($sql) {
            $records = SqlExecuter::select($sql);
            if(count($records) == 0) {
                return null;
            }
            return $records[0];
        }

        public static function insert($sql) {
            SqlExecuter::exec($sql);
        }

        public static function update($sql) {
            SqlExecuter::exec($sql);
        }

        private static function exec($sql) {
            $con = SqlExecuter::create_connection();
            $con->exec($sql);
        }

    }
?>