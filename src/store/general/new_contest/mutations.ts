import { MutationTree } from "vuex"
import { NewContestState } from "./types"
import ContestFactory from "@/domain/factory/ContestFactory"
import Respondent from "@/domain/Respondent"
import Contest from "@/domain/Contest"

export const mutations: MutationTree<NewContestState> = {

    /**
     * オブジェクトを受け取り、Contestに変換してからstateにセットする
     * @param state
     * @param contest Contestの内容を保持するオブジェクト
     */
    set_current_contest_from_object(state, contest: any) {
        state.current_contest = ContestFactory.from_object(contest)
    },

    set_current_contest(state, contest: Contest) {
        state.current_contest = contest
    },

    /**
     * オブジェクトを受け取り、Contestに変換してからstateにセットする
     * @param state
     * @param contest Contestの内容を保持するオブジェクト
     */
    set_prev_contest(state, contest: any) {
        state.prev_contest = ContestFactory.from_object(contest)
    },

    set_is_waiting(state, is_waiting: boolean) {
        state.is_waiting = is_waiting
    },

}
