import { Module } from "vuex"
import { NewContestState } from "./types"
import { RootState } from "@/store/types"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"
import Contest from "@/domain/Contest"
import MusikuiDate from "@/value_object/MusikuiDate"

// storeとしてはdomainの組み合わせを保持して起き、
// getterで取得するときに画面表示の形にする

export const state: NewContestState = {
    current_contest: new Contest(
        0,
        new MusikuiDate("2000/01/01"),
        "ロード中・・・",
        [],
    ),
    prev_contest: new Contest(
        0,
        new MusikuiDate("2018/11/23"),
        "prevだよ",
        [],
    ),
    is_waiting: false,
}

export const new_contest_store: Module<NewContestState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
