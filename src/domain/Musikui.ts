import Formula from "./Formula"
import Hissan from "./Hissan"
import Respondent from "./Respondent"

export default class Muskui {

    constructor(
        readonly musikui_id: number,
        readonly level: number,
        readonly comment: string,
        readonly mark: string,
        readonly formula: Formula,
        readonly hissan_question: Hissan,
        readonly hissan_answer: Hissan,
        readonly nrow: number,
        readonly ncol: number,
        readonly respondents: Respondent[],
    ) {}

}
