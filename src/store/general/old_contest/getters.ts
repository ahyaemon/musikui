import { GetterTree } from "vuex"
import { OldContestState } from "./types"
import MusikuiArticle from "@/value_object/MusikuiArticle"
import { RootState } from "@/store/types"
import Contest from "@/domain/Contest"
import Musikui from "@/domain/Musikui"

export const getters: GetterTree<OldContestState, RootState> = {

    contest(state): Contest {
        return state.contest
    },

    musikui_articles(state): MusikuiArticle[] {
        return state.contest.musikuis.map((musikui: Musikui, idx) => {
            return {
                header: `Q${idx + 1} - ${musikui.difficulty} Lv.${musikui.level}`,
                musikui,
            }
        })
    },

}
