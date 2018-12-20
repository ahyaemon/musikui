import { Module } from "vuex"
import { MusikuiMgrState } from "./types"
import { RootState } from "@/store/types"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"

export const state: MusikuiMgrState = {
    files: undefined,
    musikuis: [],
}

export const musikui_store: Module<MusikuiMgrState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
