import { MutationTree } from "vuex"
import { MusikuiMgrState } from "./types"
import Musikui from "@/domain/Musikui"
import Paging from "@/value_object/Paging"

export const mutations: MutationTree<MusikuiMgrState> = {

    set_files(state, files: FileList) {
        state.files = files
    },

    set_musikuis(state, musikuis: Musikui[]) {
        state.musikuis = musikuis
    },

    set_page_number(state, page_number: number) {
        state.paging = new Paging(page_number, state.paging.max_record_amount)
    },

}
