import Contest from "@/domain/Contest"
import Musikui from "@/domain/Musikui"
import Respondent from "@/domain/Respondent"
import { Difficulty } from "@/value_object/Difficulty"

/**
 * 「今週の問題」ページに必要なデータ
 */
export interface NewContestState {
    current_contest: Contest
    prev_contest: Contest
    is_waiting: boolean
}
