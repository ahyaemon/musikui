import { MutationTree } from "vuex"
import { OldContestState } from "./types"
import ContestFactory from "@/domain/factory/ContestFactory"

export const mutations: MutationTree<OldContestState> = {

    /**
     * オブジェクトを受け取り、Contestに変換してからstateにセットする
     * @param state
     * @param contest Contestの内容を保持するオブジェクト
     */
    set_contest(state, contest: any) {
        state.contest = ContestFactory.from_object(contest)
    },

}
