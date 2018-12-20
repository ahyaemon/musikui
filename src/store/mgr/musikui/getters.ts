import { GetterTree } from "vuex"
import { MusikuiMgrState } from "./types"
import { RootState } from "@/store/types"
import Musikui from "@/domain/Musikui"

export const getters: GetterTree<MusikuiMgrState, RootState> = {

    musikuis(state): Musikui[] {
        return state.musikuis
    },

}
