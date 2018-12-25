import { Module } from "vuex"
import { HowState } from "./types"
import { RootState } from "@/store/types"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"
import Contest from "@/domain/Contest"
import MusikuiDate from "@/value_object/MusikuiDate"

// storeとしてはdomainの組み合わせを保持して起き、
// getterで取得するときに画面表示の形にする

export const state: HowState = {
    musikuis: [],
}

export const how_store: Module<HowState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
