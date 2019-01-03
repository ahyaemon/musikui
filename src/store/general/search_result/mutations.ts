import { MutationTree } from "vuex"
import { SearchResultState } from "./types"
import SearchCondition from "@/value_object/SearchCondition"
import Musikui from "@/domain/Musikui"
import ContestFactory from "@/domain/factory/ContestFactory"
import MusikuiDate from "@/value_object/MusikuiDate"
import MusikuiFactory from "@/domain/factory/MusikuiFactory"

export const mutations: MutationTree<SearchResultState> = {

    set_is_waiting(state, is_waiting: boolean) {
        state.is_waiting = is_waiting
    },

    set_searched_condition(state, condition: SearchCondition): void {
        state.searched_condition = condition
    },

    set_musikuis_with_contest_info(state, records: any[]): void {
        state.musikuis_with_contest_info = records.map((record) => {
            return {
                date: new MusikuiDate(record.date),
                question_number: record.question_number,
                musikui: MusikuiFactory.from_object(record.musikui),
            }
        })
    },

}
