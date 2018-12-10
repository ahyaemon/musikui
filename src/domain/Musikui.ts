import Formula from "./Formula"
import Hissan from "./Hissan"
import Respondent from "./Respondent"
import { Difficulty } from "@/domain/Difficulty"

export default class Musikui {

    public difficulty: Difficulty

    constructor(
        readonly id: number,
        readonly level: number,
        readonly comment: string,
        readonly mark: string,
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
