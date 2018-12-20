import SearchCondition from "@/value_object/SearchCondition"

/**
 * state
 * SearchConditionと異なり、全虫食い算中の[max_level/max_col]を保持する
 */
export interface SearchQuestonState {
    search_condition: SearchCondition
    max_level: number
    max_col: number
    old_contest_infos: OldContestInfo[]
}

/**
 * 画面の選択しとして表示する用
 */
export interface OldContestInfo {
    contest_number: number
    date: string
}
