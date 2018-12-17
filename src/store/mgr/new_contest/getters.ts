import { GetterTree } from "vuex"
import { NewContestMgrState, RecentContests } from "./types"
import { RootState } from "@/store/types"
import Contest from "@/domain/Contest"
import Musikui from "@/domain/Musikui"
import MusikuiDate from "@/value_object/MusikuiDate"

export const getters: GetterTree<NewContestMgrState, RootState> = {

    publish_date(state): MusikuiDate {
        return state.publish_date
    },

    comment(state): string {
        return state.comment
    },

    recent_contests(state): RecentContests {
        return state.recent_contests
    },

    selected_contest_id(state): number {
        return state.selected_contest_id
    },

}
