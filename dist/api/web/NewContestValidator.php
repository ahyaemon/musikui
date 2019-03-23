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
                    return $errors;
                }
            }

            if($answered_formula->right != $correct_formula->right) {
                array_push($errors, [ "field" => "answer", "message" => "答えが間違っとるぜ"]);
                return $errors;
            }

            return $errors;
        }

        public static function respondent_validation($name, $session, $key) {
            $errors = [];

            if($name == "") {
                array_push($errors, [ "field" => "name", "message" => "名前を入力していただきたい"]);
                return $errors;
            }

            if(!isset($_SESSION[$key])) {
                array_push($errors, [ "field" => "name", "message" => "本当に問題解いた？"]);
                return $errors;
            }

            if(!isset($_SESSION[$key]["answer_datetime"])) {
                array_push($errors, [ "field" => "name", "message" => "本当に問題解いた？"]);
                return $errors;
            }

            if(isset($_SESSION[$key]["commented"])) {
                $commented = $_SESSION[$key]["commented"];
                if($commented) {
                    array_push($errors, [ "field" => "name", "message" => "既にコメント済み？"]);
                    return $errors;
                }
            }

            return $errors;
        }

    }

?>