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
 * ユーザーが選択した検索条件
 */
export interface SearchCondition {
    min_level: number
    max_level: number
    plus_selected: boolean
    multiple_selected: boolean
    divide_selected: boolean
    min_col: number
    max_col: number
}

/**
 * 画面の選択しとして表示する用
 */
export interface OldContestInfo {
    contest_number: number
    date: string
}
