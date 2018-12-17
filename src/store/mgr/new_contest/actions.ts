import { ActionTree } from "vuex"
import { NewContestMgrState } from "./types"
import { RootState } from "@/store/types"
import fetcher from "@/util/fetcher"
import reader from "@/util/reader"
import Musikui from "@/domain/Musikui"

const controller = "NewContestMgrController"

export const actions: ActionTree<NewContestMgrState, RootState> = {

    async fetch_recent_contests({ commit }) {
        fetcher.get({
            controller,
            method: "get_recent_contests",
            params: {
                amount: 5,
            },
        }).then((response) => {
            commit("set_recent_contests", response.contests)
            commit("set_current_contest_id", response.current_contest_id)
            commit("set_selected_contest_id", response.current_contest_id)
        })
    },

    /**
     * 虫食い算のテキストファイルをパースしてからサーバーに送る
     */
    async add_new_contest({ commit, state }) {
        // テキストファイルのリストにする
        const texts = []
        for (let i = 0; i < state.files!.length; i++) {
            const file = state.files![i]
            const text = await reader.read_file_as_text(file)
            texts.push(text)
        }

        // json化したMusikui形式に変換
        const musikuis = texts.map((text) => {
            return Musikui.from_text(text)
        }).map((musikui) => {
            return JSON.stringify(musikui)
        })

        // サーバーに送る
        await fetcher.post({
            controller,
            method: "add_new_contest",
            params: {
                musikui_texts: JSON.stringify(musikuis),
                date: state.publish_date.format(),
                comment: state.comment,
            },
        })
    },

    update_current_contest_id({ commit, state }) {
        fetcher.post({
            controller,
            method: "update_current_contest_id",
            params: {
                contest_id: state.selected_contest_id,
            },
        }).then((response) => {
            commit("set_current_contest_id", state.selected_contest_id)
        })
    },

}
