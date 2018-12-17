import Formula from "./Formula"
import Hissan from "./Hissan"
import Respondent from "./Respondent"
import { Mark, from_hissan as mark_from_hissan } from "./Mark"
import { Difficulty } from "@/domain/Difficulty"
import Parser from "@/util/parser"

export default class Musikui {

    /**
     * Dr.kenから受領したテキストファイルを、Musikui形式にして変換する
     */
    public static from_text(text: string): Musikui {
        const lines = text.replace(/[\r\n]/g, "\n").split("\n")
        const level = Parser.get_level(lines)
        const hissan_lines = Parser.get_hissan_lines(lines)
        const comment_lines = Parser.get_comment_lines(lines)
        const hissan_both = Hissan.from_lines(hissan_lines)
        return new Musikui(
            0,
            level,
            comment_lines.join("<br>"),
            mark_from_hissan(hissan_both.answer),
            Formula.from_hissan(hissan_both.answer),
            hissan_both.question,
            hissan_both.answer,
            hissan_both.answer.rows.length,
            hissan_both.answer.rows[0].length,
            [Respondent.default()],
        )
    }

    public difficulty: Difficulty

    constructor(
        readonly id: number,
        readonly level: number,
        readonly comment: string,
        readonly mark: Mark,
        readonly formula: Formula,
        readonly hissan_question: Hissan,
        readonly hissan_answer: Hissan,
        readonly nrow: number,
        readonly ncol: number,
        readonly respondents: Respondent[],
    ) {
        if (this.level <= 3) {
            this.difficulty = Difficulty.Easy
        } else if (this.level <= 6) {
            this.difficulty = Difficulty.Normal
        } else if (this.level <= 9) {
            this.difficulty = Difficulty.Hard
        } else {
            this.difficulty = Difficulty.Hell
        }
    }

}
