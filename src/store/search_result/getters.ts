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

}
