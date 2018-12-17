import { Module } from "vuex"
import { NewContestMgrState } from "./types"
import { RootState } from "@/store/types"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"
import Contest from "@/domain/Contest"
import MusikuiDate from "@/value_object/MusikuiDate"

// storeとしてはdomainの組み合わせを保持して起き、
// getterで取得するときに画面表示の形にする

export const state: NewContestMgrState = {
    files: undefined,
    publish_date: new MusikuiDate("2018/01/01"),
    recent_contests: {
        contests: [],
        current_contest_id: 0,
    },
    selected_contest_id: 0,
    comment: "ない",
}

export const new_contest_store: Module<NewContestMgrState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
