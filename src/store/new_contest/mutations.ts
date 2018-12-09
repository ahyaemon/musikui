import { MutationTree } from "vuex"
import { NewContestState } from "./types"
import Contest from "../../domain/Contest"

export const mutations: MutationTree<NewContestState> = {

    set_current_contest(state, current_contest: Contest) {
        state.current_contest = current_contest
    },

    set_prev_contest(state, prev_contest: Contest) {
        state.prev_contest = prev_contest
    },

}
