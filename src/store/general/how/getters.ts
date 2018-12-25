import { GetterTree } from "vuex"
import { HowState } from "./types"
import MusikuiArticle from "@/value_object/MusikuiArticle"
import { RootState } from "@/store/types"
import Contest from "@/domain/Contest"
import Musikui from "@/domain/Musikui"
import Hissan from "@/value_object/Hissan"

export const getters: GetterTree<HowState, RootState> = {

    hissan_question(state): (idx: number) => Hissan {
        return (idx: number) => {
            if (idx >= state.musikuis.length) {
                return Hissan.default()
            }
            return state.musikuis[idx].hissan_question
        }
    },

    hissan_answer(state): (idx: number) => Hissan {
        return (idx: number) => {
            if (idx >= state.musikuis.length) {
                return Hissan.default()
            }
            return state.musikuis[idx].hissan_answer
        }
    },

}
