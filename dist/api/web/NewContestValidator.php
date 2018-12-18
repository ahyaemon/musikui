<?php

    class NewContestValidator {

        public static function is_correct_answer_validation($formula) {
            $errors = [];

            $lefts = $formula->lefts;
            if($lefts == null) {
                array_push($errors, [ "field" => "answer", "message" => "左辺の入力が足りない"]);
            }
            else if(count($lefts) < 2) {
                array_push($errors, [ "field" => "answer", "message" => "左辺の入力が足りない"]);
            }

            $right = $formula->right;
            if($right == "") {
                array_push($errors, [ "field" => "answer", "message" => "右辺が入力されていない"]);
            }

            return $errors;
        }

        public static function check_answer($answered_formula, $correct_formula) {
            $errors = [];

            for($i = 0; $i < count($answered_formula->lefts); $i++) {
                if($answered_formula->lefts[$i] != $correct_formula->lefts[$i]) {
                    array_push($errors, [ "field" => "answer", "message" => "答えが間違っとるぜ"]);
                    return $erros;
                }
            }

            if($answered_formula->right != $correct_formula->right) {
                array_push($errors, [ "field" => "answer", "message" => "答えが間違っとるぜ"]);
                return $erros;
            }

            return $errors;
        }

    }

?>