import { ActionTree } from "vuex"
import { SearchQuestonState } from "./types"
import { RootState } from "@/store/types"
import fetcher from "@/util/fetcher"
import SearchCondition from "@/value_object/SearchCondition"
import SearchConditionFactory from "@/value_object/factory/SearchConditionFactory"

export const actions: ActionTree<SearchQuestonState, RootState> = {

    fetch_max_level_and_col({ commit }): void {
        fetcher.get({
            controller: "SearchQuestionController",
            method: "get_max_level_and_col",
            params: {},
        }).then((response) => {
            commit("set_max_level", response.max_level)
            commit("set_max_col", response.max_col)
        })
    },

    fetch_old_contest_infos({ commit }): void {
        fetcher.get({
            controller: "SearchQuestionController",
            method: "get_contest_infos",
            params: {},
        }).then((response) => {
            commit("set_old_contest_infos", response)
        })
    },

    set_search_condition({ commit }, params: any): void {
        const condition: SearchCondition = SearchConditionFactory.from_url_params(params)
        commit("set_search_condition", condition)
    },

}
