import { GetterTree } from "vuex"
import { NewContestState } from "./types"
import { RootState } from "../types"
import Contest from "../../domain/Contest"

export const getters: GetterTree<NewContestState, RootState> = {

    prev_contest(state): Contest {
        return state.prev_contest
    },

    current_contest(state): Contest {
        return state.current_contest
    },

}
