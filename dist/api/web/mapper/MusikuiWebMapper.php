<?php
    class MusikuiWebMapper {

        public static function from_text($musikui_text) {
            $json = json_decode($musikui_text);
            return [
                "level" => $json->level,
                "comment" => $json->comment,
                "hissan_question" => json_encode($json->hissan_question->rows),
                "hissan_answer" => json_encode($json->hissan_answer->rows),
                "mark" => $json->mark,
                "formula" => json_encode($json->formula),
                "nrow" => $json->nrow,
                "ncol" => $json->ncol
            ];
        }

    }
?>
