import SearchCondition from "@/domain/SearchCondition"
import Contest from "@/domain/Contest"
import MusikuiDate from "@/value_object/MusikuiDate"
import Musikui from "@/domain/Musikui"

export interface SearchResultState {
    searched_condition: SearchCondition
    musikuis_with_contest_info: MusikuiWithContestInfo[]
}

/**
 * Musikuiクラスに以下の情報を付与したもの
 *   - date
 *   - question_number
 * 本来はContestとして保持する情報だが、ContestはMusikuiを配列として保持しているため、
 * 「ContestにMusikuiがひとつ紐づくもの」として保持しているとquestion_numberが導出できない。
 */
export interface MusikuiWithContestInfo {
    date: MusikuiDate
    question_number: number
    musikui: Musikui
}
