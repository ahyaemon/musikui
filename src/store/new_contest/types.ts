import Contest from "../../domain/Contest"
import Musikui from "../../domain/Musikui"
import Respondent from "../../domain/Respondent"
import { Difficulty } from "../../domain/Difficulty"

export interface NewContestState {
    current_contest: Contest
    prev_contest: Contest
}

export interface LastRespondent {
    respondent: Respondent
    question_number: number
    level: number
}

export interface Jump {
    question_number: number
    level: number
    difficulty: Difficulty
}

export interface Top {
    date: Date,
    next_date: Date,
    comment: string,
    last_respondents: LastRespondent[]
    jumps: Jump[]
}

export interface MusikuiArticle {
    musikui: Musikui
    question_number: number
    difficulty: Difficulty
}
