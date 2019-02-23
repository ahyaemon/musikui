import { MutationTree } from "vuex"
import { NewContestMgrState } from "./types"
import ContestFactory from "@/domain/factory/ContestFactory"
import MusikuiDate from "@/value_object/MusikuiDate"
import Contest from "@/domain/Contest"

export const mutations: MutationTree<NewContestMgrState> = {

    set_publish_date(state, date: string) {
        state.publish_date = MusikuiDate.from_string(date)
    },

    set_next_sunday(state) {
        const today = new Date()
        const musikui_today = MusikuiDate.from_string(today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate())
        const next_sunday = musikui_today.next_sunday()
        state.publish_date = next_sunday
    },

    set_comment(state, comment: string) {
        state.comment = comment
    },

    set_files(state, files: FileList) {
        state.files = files
    },

    set_recent_contests(state, contests: any) {
        state.recent_contests.contests = contests.map((contest: any) => {
            return ContestFactory.from_id_and_date(contest.id, contest.date)
        })
    },

    set_current_contest_id(state, id: number) {
        state.recent_contests.current_contest_id = id
    },

    set_selected_contest_id(state, id: number) {
        state.selected_contest_id = id
    },

}
