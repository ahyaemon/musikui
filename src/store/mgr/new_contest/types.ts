import Contest from "@/domain/Contest"
import MusikuiDate from "@/value_object/MusikuiDate"

/**
 * recent_contestsに関しては、日付とidのみを持つ
 */
export interface NewContestMgrState {
    files?: FileList
    publish_date: MusikuiDate
    recent_contests: RecentContests
    selected_contest_id: number
    comment: string
}

/**
 * セレクトボックス表示用
 */
export interface RecentContests {
    contests: Contest[]
    current_contest_id: number
}
