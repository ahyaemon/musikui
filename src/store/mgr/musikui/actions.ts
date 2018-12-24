import { ActionTree } from "vuex"
import { MusikuiMgrState } from "./types"
import { RootState } from "@/store/types"
import Fetcher from "@/util/fetcher"
import reader from "@/util/reader"
import Musikui from "@/domain/Musikui"

const controller = "MusikuiMgrController"

export const actions: ActionTree<MusikuiMgrState, RootState> = {

    async fetch_musikuis({ commit }) {
        Fetcher.get({
            controller,
            method: "get_musikuis",
            params: {},
        }).then((response) => {
            commit("set_musikuis", response)

        })
    },

    async submit_musikuis({ commit, state }) {
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
        await Fetcher.post({
            controller,
            method: "add_musikuis",
            params: {
                musikui_texts: JSON.stringify(musikuis),
            },
        })
    },

}
