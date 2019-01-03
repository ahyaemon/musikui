import { ActionTree } from "vuex"
import { SearchQuestonState } from "./types"
import { RootState } from "@/store/types"
import fetcher from "@/util/fetcher"
import SearchCondition from "@/value_object/SearchCondition"
import SearchConditionFactory from "@/value_object/factory/SearchConditionFactory"

export const actions: ActionTree<SearchQuestonState, RootState> = {

    /**
     * 選択肢の表示用に、最大レベルと最大列数を取得する
     * @param param0
     */
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

    /**
     * 過去のコンテスト一覧を取得する
     * spinnerをここで解除する
     * @param param0
     */
    fetch_old_contest_infos({ commit }): void {
        fetcher.get({
            controller: "SearchQuestionController",
            method: "get_contest_infos",
            params: {},
        }).then((response) => {
            commit("set_old_contest_infos", response)
            commit("set_is_waiting", false)
        })
    },

    set_search_condition({ commit }, params: any): void {
        const condition: SearchCondition = SearchConditionFactory.from_url_params(params)
        commit("set_search_condition", condition)
    },

}
