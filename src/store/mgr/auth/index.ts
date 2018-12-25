import { Module } from "vuex"
import { AuthState } from "./types"
import { RootState } from "@/store/types"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"

export const state: AuthState = {
    is_admin: false,
}

export const auth_store: Module<AuthState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
