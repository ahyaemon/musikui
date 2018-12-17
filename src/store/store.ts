import Vue from "vue"
import Vuex, { StoreOptions } from "vuex"
import { RootState } from "./types"
import { general_store } from "./general"
import { mgr_store } from "./mgr"

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0",
    },
    modules: {
        general_store,
        mgr_store,
    },
}

export default new Vuex.Store<RootState>(store)
