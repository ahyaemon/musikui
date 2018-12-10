import Contest from "../../domain/Contest"
import Musikui from "../../domain/Musikui"
import Respondent from "../../domain/Respondent"
import { Difficulty } from "../../domain/Difficulty"

/**
 * 「今週の問題」ページに必要なデータ
 */
export interface NewContestState {
    current_contest: Contest
    prev_contest: Contest
}

/**
 * 虫食い記事に必要なデータ
 */
export interface MusikuiArticle {
    header: string
    musikui: Musikui
}
