<?php

    class ContestMapper {

        /**
         * musikui_idに対して、respondentを集約する
         * all_respondent[musikui_id]= [
         *     { ... },
         *     { ... },
         * ]
         */
        private static function to_respondent($result) {
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
            return $all_respondents;
        }

        /**
         * formulaの内容を 0 に置き換える
         */
        private static function mask_formula($record) {
            $formula = json_decode($record["formula"]);
            $lefts = array_map(function($left) {
                return 0;
            }, $formula->lefts);
            $formula = [
                "right" => 0,
                "lefts" => $lefts
            ];
            return $formula;
        }

        private static function to_musikui($musikui_id, $result, $all_respondents) {
            $target_record = array_values(array_filter($result, function($record) use($musikui_id) {
                return $record["musikui_id"] == $musikui_id;
            }))[0];
            // 回答はすべての項を 0 にしておく（答えがクライアントに渡らないように）
            $formula = ContestMapper::mask_formula($target_record);
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

            return $musikui;
        }

        public static function to_contest($result) {
            // musikui_idに対して、respondentを集約する
            $all_respondents = ContestMapper::to_respondent($result);

            // musikuis作成
            $musikui_ids = array_unique(array_map(function($record) {
                return $record["musikui_id"];
            }, $result));
            $musikuis = array_map(function($musikui_id) use($result, $all_respondents) {
                return ContestMapper::to_musikui($musikui_id, $result, $all_respondents);
            }, $musikui_ids);

            // contest 作成
            $contest = [
                "id" => $result[0]["contest_id"],
                "date" => $result[0]["contest_date"],
                "comment" => $result[0]["contest_comment"],
                "musikuis" => array_values($musikuis)
            ];
            return $contest;
        }

        public static function to_musikuis_with_contest_info($result) {
            // musikui_idに対して、respondentを集約する
            $all_respondents = ContestMapper::to_respondent($result);

            // musikuis作成
            $musikui_ids = array_unique(array_map(function($record) {
                return $record["musikui_id"];
            }, $result));
            $musikuis = array_map(function($musikui_id) use($result, $all_respondents) {
                return ContestMapper::to_musikui($musikui_id, $result, $all_respondents);
            }, $musikui_ids);

            // musikuisに、dateとquestion_numberを付与
            $musikuis_with_contest_info = array_map(function($musikui) use($result) {
                $musikui_id = $musikui["id"];
                $record0 = array_values(array_filter($result, function($record) use($musikui_id) {
                    return $record["musikui_id"] == $musikui_id;
                }))[0];
                $musikui_with_contest_info = [
                    "date" => $record0["date"],
                    "question_number" => $record0["question_number"],
                    "musikui" => $musikui
                ];
                return $musikui_with_contest_info;

            }, $musikuis);

            return array_values($musikuis_with_contest_info);


        }

    }

?>