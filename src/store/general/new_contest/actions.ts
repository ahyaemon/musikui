import { ActionTree } from "vuex"
import { NewContestState } from "./types"
import { RootState } from "@/store/types"
import Fetcher from "@/util/fetcher"
import Contest from "@/domain/Contest"

const controller = "NewContestController"

export const actions: ActionTree<NewContestState, RootState> = {

    fetch_new_contest({ commit }): void {
        Fetcher.get({
            controller,
            method: "get",
            params: {},
        }).then((response) => {
            commit("set_current_contest_from_object", response.current_contest)
            commit("set_prev_contest", response.prev_contest)
        })
    },

    fetch_respondent({ commit, state }, params: any) {
        Fetcher.get({
            controller,
            method: "get_respondent_by_musikui_id",
            params,
        }).then((response) => {
            const contest = Contest.clone_with_new_respondents(state.current_contest, params.musikui_id, response)
            commit("set_contest", contest)
        })
    },

}
