import Vue from "vue"
import Vuex, { StoreOptions } from "vuex"
import { RootState } from "./types"
import { new_contest_store } from "./new_contest/index"
import { search_question_store } from "./search_question/index"

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0",
    },
    modules: {
        new_contest_store,
        search_question_store,
    },
}

export default new Vuex.Store<RootState>(store)
