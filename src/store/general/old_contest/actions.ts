import { ActionTree } from "vuex"
import { OldContestState } from "./types"
import { RootState } from "@/store/types"
import fetcher from "@/util/fetcher"

export const actions: ActionTree<OldContestState, RootState> = {

    fetch_contest({ commit }, contest_id: number): void {
        fetcher.get({
            controller: "OldContestController",
            method: "get_by_contest_id",
            params: { contest_id },
        }).then((response) => {
            commit("set_contest", response)
            commit("set_is_waiting", false)
        })
    },

}
