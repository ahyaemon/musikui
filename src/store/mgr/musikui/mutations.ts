import { MutationTree } from "vuex"
import { MusikuiMgrState } from "./types"
import Musikui from "@/domain/Musikui"

export const mutations: MutationTree<MusikuiMgrState> = {

    set_files(state, files: FileList) {
        state.files = files
    },

    set_musikuis(state, musikuis: Musikui[]) {
        state.musikuis = musikuis
    },

}
