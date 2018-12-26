import { ActionTree } from "vuex"
import { AuthState } from "./types"
import { RootState } from "@/store/types"
import Fetcher from "@/util/fetcher"
import router from "@/route/router"

const controller = "AuthController"

export const actions: ActionTree<AuthState, RootState> = {

    login({ commit, state }, params: any) {
        Fetcher.post({
            controller,
            method: "login",
            params,
        }).then((response) => {
            if (response.error_fields) {
                commit("set_error_fields", response.error_fields)
                commit("set_is_admin", false)
                return
            }
            commit("set_is_admin", true)
            router.push("/mgr/new-contest")
        })
    },

}
