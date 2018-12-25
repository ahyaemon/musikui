import { MutationTree } from "vuex"
import { HowState } from "./types"
import ContestFactory from "@/domain/factory/ContestFactory"

export const mutations: MutationTree<HowState> = {

    // /**
    //  * オブジェクトを受け取り、Contestに変換してからstateにセットする
    //  * @param state
    //  * @param contest Contestの内容を保持するオブジェクト
    //  */
    // set_current_contest(state, contest: any) {
    //     state.current_contest = ContestFactory.from_object(contest)
    // },

    // /**
    //  * オブジェクトを受け取り、Contestに変換してからstateにセットする
    //  * @param state
    //  * @param contest Contestの内容を保持するオブジェクト
    //  */
    // set_prev_contest(state, contest: any) {
    //     state.prev_contest = ContestFactory.from_object(contest)
    // },

}
