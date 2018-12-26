import { GetterTree } from "vuex"
import { AuthState } from "./types"
import { RootState } from "@/store/types"
import ErrorField from "@/value_object/ErrorField"

export const getters: GetterTree<AuthState, RootState> = {

    is_admin(state): boolean {
        return state.is_admin
    },

    error_fields(state): ErrorField[] {
        return state.error_fields
    },

}
