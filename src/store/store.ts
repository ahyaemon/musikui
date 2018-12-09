import Vue from "vue"
import Vuex, { StoreOptions } from "vuex"
import { RootState } from "./types"
import { new_contest_store } from "./new_contest/index"

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0",
    },
    modules: {
        new_contest_store,
    },
}

export default new Vuex.Store<RootState>(store)
