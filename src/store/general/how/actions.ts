import { ActionTree } from "vuex"
import { HowState } from "./types"
import { RootState } from "@/store/types"
import Fetcher from "@/util/fetcher"

export const actions: ActionTree<HowState, RootState> = {

    fetch_musikuis({ commit, state }, ids: number[]): void {
        Fetcher.get({
            controller: "HowController",
            method: "get_musikuis",
            params: { ids },
        }).then((response) => {
            state.musikuis = response
        })
    },

}
