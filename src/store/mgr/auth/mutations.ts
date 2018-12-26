import { MutationTree } from "vuex"
import { AuthState } from "./types"
import ErrorField from "@/value_object/ErrorField"

export const mutations: MutationTree<AuthState> = {

    set_error_fields(state, error_fields: ErrorField[]) {
        state.error_fields = error_fields
    },

    set_is_admin(state, is_admin: boolean) {
        state.is_admin = is_admin
    },

}
