import { ActionTree } from "vuex"
import { SearchResultState } from "./types"
import { RootState } from "../types"
import fetcher from "../../util/fetcher"

export const actions: ActionTree<SearchResultState, RootState> = {

    // fetch_max_level_and_col({ commit }): void {
    //     fetcher.get({
    //         controller: "SearchQuestionController",
    //         method: "get_max_level_and_col",
    //         params: {},
    //     }).then((response) => {
    //         commit("set_max_level", response.max_level)
    //         commit("set_max_col", response.max_col)
    //     })
    // },

    // fetch_old_contest_infos({ commit }): void {
    //     fetcher.get({
    //         controller: "SearchQuestionController",
    //         method: "get_contest_infos",
    //         params: {},
    //     }).then((response) => {
    //         commit("set_old_contest_infos", response)
    //     })
    // },

    // search_question({ commit }): void {

    // },

}
