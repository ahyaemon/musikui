import { ActionTree } from "vuex"
import { AuthState } from "./types"
import { RootState } from "@/store/types"

const controller = "AuthController"

export const actions: ActionTree<AuthState, RootState> = {

    // async fetch_musikuis({ commit }) {
    //     Fetcher.get({
    //         controller,
    //         method: "get_musikuis",
    //         params: {},
    //     }).then((response) => {
    //         commit("set_musikuis", response)

    //     })
    // },

}
