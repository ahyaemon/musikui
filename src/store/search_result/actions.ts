import { ActionTree } from "vuex"
import { SearchResultState } from "./types"
import { RootState } from "../types"
import fetcher from "../../util/fetcher"
import SearchCondition from "@/domain/SearchCondition"

export const actions: ActionTree<SearchResultState, RootState> = {

    /**
     * viewrouterを使用したURLパラメータにより、
     * booleanが01で入ってくる
     */
    set_searched_condition({ commit }, params: any): void {
        const condition: SearchCondition = {
            min_level: params.min_level,
            max_level: params.max_level,
            plus_selected: params.plus_selected === "1",
            multiple_selected: params.multiple_selected === "1",
            divide_selected: params.divide_selected === "1",
            min_col: params.min_col,
            max_col: params.max_col,
        }
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
        })
    },

}
