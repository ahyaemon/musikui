import { ActionTree } from "vuex"
import { MusikuiMgrState } from "./types"
import { RootState } from "@/store/types"
import Fetcher from "@/util/fetcher"
import reader from "@/util/reader"
import Musikui from "@/domain/Musikui"

const controller = "MusikuiMgrController"

export const actions: ActionTree<MusikuiMgrState, RootState> = {

    fetch_musikuis({ commit }) {
        Fetcher.get({
            controller,
            method: "get_musikuis",
            params: {},
        }).then((response) => {
            commit("set_musikuis", response)

        })
    },

}
