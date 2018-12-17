import { Module } from "vuex"
import { SearchQuestonState } from "./types"
import { RootState } from "@/store/types"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"
import Contest from "@/domain/Contest"
import MusikuiDate from "@/value_object/MusikuiDate"

export const state: SearchQuestonState = {
    search_condition : {
        min_level: 1,
        max_level: 10,
        plus_selected: true,
        multiple_selected: true,
        divide_selected: true,
        min_col: 1,
        max_col: 10,
    },
    max_col: 10,
    max_level: 10,
    old_contest_infos: [],
}

export const search_question_store: Module<SearchQuestonState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
