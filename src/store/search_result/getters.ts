import { GetterTree } from "vuex"
import { SearchResultState, MusikuiWithContestInfo } from "./types"
import SearchCondition from "@/domain/SearchCondition"
import { RootState } from "../types"
import Contest from "@/domain/Contest"
import MusikuiArticle from "@/domain/MusikuiArticle"

export const getters: GetterTree<SearchResultState, RootState> = {

    musikui_articles(state): MusikuiArticle[] {
        return state.musikuis_with_contest_info.map((m: MusikuiWithContestInfo, idx) => {
            return {
                header: `${m.date.get_date()} Q${idx + 1} - ${m.musikui.difficulty} Lv.${m.musikui.level}`,
                musikui: m.musikui,
            }
        })
    },

    search_result_label(state): string {
        const condition = state.searched_condition
        let label = ""
        label += `レベル: ${condition.min_level}～${condition.max_level}`
        label += " / "
        label += "タイプ: ["
        if (condition.plus_selected) {
            label += "＋"
        }
        if (condition.multiple_selected) {
            label += "×"
        }
        if (condition.divide_selected) {
            label += "÷"
        }
        label += "]"
        label += " / "
        label += `列数: ${condition.min_col}～${condition.max_col}`

        return label
    },

    search_result_amount(state): number {
        return state.musikuis_with_contest_info.length
    },

}
