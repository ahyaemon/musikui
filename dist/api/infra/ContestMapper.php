<?php

    class ContestMapper {

        public static function to_contest($sql_result) {
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

    }

?>