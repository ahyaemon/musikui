import ErrorField from "@/value_object/ErrorField"

export interface AuthState {
    is_admin: boolean
    error_fields: ErrorField[]
}
