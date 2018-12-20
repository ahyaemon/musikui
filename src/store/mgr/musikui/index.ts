import { Module } from "vuex"
import { MusikuiMgrState } from "./types"
import { RootState } from "@/store/types"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"
import Paging from "@/value_object/Paging"

export const state: MusikuiMgrState = {
    files: undefined,
    musikuis: [],
    paging: new Paging(1, 10),
}

export const musikui_store: Module<MusikuiMgrState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
