import { Module } from "vuex"
import { RootState } from "@/store/types"
import { new_contest_store } from "./new_contest/index"
import { old_contest_store } from "./old_contest/index"
import { search_question_store } from "./search_question/index"
import { search_result_store } from "./search_result/index"
import { how_store } from "./how/index"

interface GeneralState {
    version: string
}

export const general_store: Module<GeneralState, RootState> = {
    namespaced: true,
    modules: {
        new_contest_store,
        old_contest_store,
        search_question_store,
        search_result_store,
        how_store,
    },
}
