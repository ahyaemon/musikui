import { MutationTree } from "vuex"
import { SearchQuestonState, OldContestInfo } from "./types"
import SearchCondition from "@/value_object/SearchCondition"

export const mutations: MutationTree<SearchQuestonState> = {

    set_max_level(state, level: number) {
        state.max_level = level
    },

    set_max_col(state, col: number) {
        state.max_col = col
    },

    set_old_contest_infos(state, contest_infos: OldContestInfo[]) {
        state.old_contest_infos = contest_infos
    },

    set_search_condition(state, condition: SearchCondition) {
        state.search_condition = condition
    },

}
