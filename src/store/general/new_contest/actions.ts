import { ActionTree } from "vuex"
import { NewContestState } from "./types"
import { RootState } from "@/store/types"
import fetcher from "@/util/fetcher"

export const actions: ActionTree<NewContestState, RootState> = {

    fetch_new_contest({ commit }): void {
        fetcher.get({
            controller: "NewContestController",
            method: "get",
            params: {},
        }).then((response) => {
            commit("set_current_contest", response.current_contest)
            commit("set_prev_contest", response.prev_contest)
        })
    },

}
