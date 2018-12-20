import { Module } from "vuex"
import { RootState } from "@/store/types"
import { new_contest_store } from "./new_contest/index"
import { musikui_store } from "./musikui/index"

interface MgrState {
    version: string
}

export const mgr_store: Module<MgrState, RootState> = {
    namespaced: true,
    modules: {
        new_contest_store,
        musikui_store,
    },
}
