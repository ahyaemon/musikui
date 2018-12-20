import { GetterTree } from "vuex"
import { MusikuiMgrState } from "./types"
import { RootState } from "@/store/types"
import Musikui from "@/domain/Musikui"
import Paging from "@/value_object/Paging"

export const getters: GetterTree<MusikuiMgrState, RootState> = {

    musikuis(state): Musikui[] {
        return state.paging.get_page_contents(state.musikuis)
    },

    paging(state): Paging {
        return state.paging
    },

    page_amount(state): number {
        return Math.ceil(state.musikuis.length / state.paging.max_record_amount)
    },

}
