import { GetterTree } from "vuex"
import { SearchQuestonState, OldContestInfo } from "./types"
import SearchCondition from "@/value_object/SearchCondition"
import { RootState } from "@/store/types"
import Contest from "@/domain/Contest"
import Musikui from "@/domain/Musikui"

export const getters: GetterTree<SearchQuestonState, RootState> = {

    is_waiting(state): boolean {
        return state.is_waiting
    },

    search_condition(state): SearchCondition {
        return state.search_condition
    },

    max_level(state): number {
        return state.max_level
    },

    max_col(state): number {
        return state.max_col
    },

    old_contest_infos(state): OldContestInfo[] {
        return state.old_contest_infos
    },

    /**
     * 検索結果のページURLを作成する
     * @param state
     */
    search_url(state): string {
        let to = "/search-result"
        to += `/${state.search_condition.min_level}`
        to += `/${state.search_condition.max_level}`
        to += `/${Number(state.search_condition.plus_selected)}`
        to += `/${Number(state.search_condition.multiple_selected)}`
        to += `/${Number(state.search_condition.divide_selected)}`
        to += `/${state.search_condition.min_col}`
        to += `/${state.search_condition.max_col}`
        return to
    },

}
