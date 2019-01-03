import { ActionTree } from "vuex"
import { NewContestState } from "./types"
import { RootState } from "@/store/types"
import Fetcher from "@/util/fetcher"
import Contest from "@/domain/Contest"

const controller = "NewContestController"

export const actions: ActionTree<NewContestState, RootState> = {

    /**
     * 今storeにあるcontestが最新でない場合、最新のcontestを取得する
     * @param param0
     */
    fetch_new_contest({ commit, state }) {
        Fetcher.get({
            controller,
            method: "get_current_contest_id",
            params: {},
        }).then((current_contest_id) => {
            // storeのcontestが最新ならreturn
            if (state.current_contest.id === current_contest_id) {
                commit("set_is_waiting", false)
                return
            }
            // commit("set_is_waiting", true)
            // 最新contestの取得
            Fetcher.get({
                controller,
                method: "get",
                params: {},
            }).then((response) => {
                commit("set_current_contest_from_object", response.current_contest)
                commit("set_prev_contest", response.prev_contest)
                commit("set_is_waiting", false)
            })
        })
    },

    fetch_respondents({ commit, state }, params: { musikui_id: number }) {
        Fetcher.get({
            controller,
            method: "get_respondents_by_musikui_id",
            params,
        }).then((response) => {
            const contest = Contest.clone_with_new_respondents(state.current_contest, params.musikui_id, response)
            commit("set_current_contest", contest)
        })
    },

}
