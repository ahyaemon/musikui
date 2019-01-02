import Formula from "@/value_object/Formula"
import Hissan from "@/value_object/Hissan"
import Respondent from "./Respondent"
import { Mark, from_hissan as mark_from_hissan } from "@/value_object/Mark"
import { Difficulty } from "@/value_object/Difficulty"
import Parser from "@/util/parser"

export default class Musikui {

    public static default(): Musikui {
        return new Musikui(
            0,
            0,
            "default comment",
            Mark.Plus,
            Formula.default(),
            Hissan.default(),
            Hissan.default(),
            1,
            1,
            [Respondent.default()],
        )
    }

    /**
     * Dr.kenから受領したテキストファイルを、Musikui形式にして変換する
     */
    public static from_text(text: string): Musikui {
        const lines = text.replace(/[\r\n]/g, "\n").split("\n")
        const level = Parser.get_level(lines)
        const hissan_lines = Parser.get_hissan_lines(lines)
        const comment_lines = Parser.get_comment_lines(lines)
        const hissan_both = Hissan.from_lines(hissan_lines)
        const mark = mark_from_hissan(hissan_both.answer)
        return new Musikui(
            0,
            level,
            comment_lines.join("<br>"),
            mark,
            Formula.from_hissan(hissan_both.answer, mark),
            hissan_both.question,
            hissan_both.answer,
            hissan_both.answer.rows.length,
            hissan_both.answer.rows[0].length,
            [Respondent.default()],
        )
    }

    public static clone_with_new_respondents(old: Musikui, respondents: Respondent[]) {
        return new Musikui(
            old.id,
            old.level,
            old.comment,
            old.mark,
            old.formula,
            old.hissan_question,
            old.hissan_answer,
            old.nrow,
            old.ncol,
            respondents,
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
