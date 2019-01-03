import { Module } from "vuex"
import { SearchResultState } from "./types"
import { RootState } from "@/store/types"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"
import Contest from "@/domain/Contest"
import MusikuiDate from "@/value_object/MusikuiDate"

export const state: SearchResultState = {
    searched_condition : {
        min_level: 1,
        max_level: 10,
        plus_selected: true,
        multiple_selected: true,
        divide_selected: true,
        min_col: 1,
        max_col: 10,
    },
    musikuis_with_contest_info: [],
    is_waiting: false,
}

export const search_result_store: Module<SearchResultState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
