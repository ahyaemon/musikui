import { ActionTree } from "vuex"
import { SearchResultState } from "./types"
import { RootState } from "@/store/types"
import fetcher from "@/util/fetcher"
import SearchCondition from "@/value_object/SearchCondition"
import SearchConditionFactory from "@/value_object/factory/SearchConditionFactory"

export const actions: ActionTree<SearchResultState, RootState> = {

    set_searched_condition({ commit }, params: any): void {
        const condition: SearchCondition = SearchConditionFactory.from_url_params(params)
        commit("set_searched_condition", condition)
    },

    search_question({ commit, state }): void {
        fetcher.get({
            controller: "SearchResultController.php",
            method: "search_question",
            params: {
                condition: state.searched_condition,
            },
        }).then((response) => {
            commit("set_musikuis_with_contest_info", response)
            commit("set_is_waiting", false)
        })
    },

}
