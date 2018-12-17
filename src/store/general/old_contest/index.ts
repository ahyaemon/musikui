import { Module } from "vuex"
import { OldContestState } from "./types"
import { RootState } from "@/store/types"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"
import Contest from "@/domain/Contest"
import MusikuiDate from "@/value_object/MusikuiDate"

// storeとしてはdomainの組み合わせを保持して起き、
// getterで取得するときに画面表示の形にする

export const state: OldContestState = {
    contest: new Contest(
        0,
        new MusikuiDate("2018/11/30"),
        "contest",
        [],
    ),
}

export const old_contest_store: Module<OldContestState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
