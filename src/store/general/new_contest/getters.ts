import { GetterTree } from "vuex"
import { NewContestState } from "./types"
import MusikuiArticle from "@/value_object/MusikuiArticle"
import { RootState } from "@/store/types"
import Contest from "@/domain/Contest"
import Musikui from "@/domain/Musikui"

export const getters: GetterTree<NewContestState, RootState> = {

    prev_contest(state): Contest {
        return state.prev_contest
    },

    current_contest(state): Contest {
        return state.current_contest
    },

    musikui_articles(state): MusikuiArticle[] {
        return state.current_contest.musikuis.map((musikui: Musikui, idx) => {
            return {
                header: `Q${idx + 1} - ${musikui.difficulty} Lv.${musikui.level}`,
                musikui,
            }
        })
    },

    is_waiting(state): boolean {
        return state.is_waiting
    },

}
