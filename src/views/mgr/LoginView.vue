<template>
    <div>
        <MCard>
            <MCardTitle>ログイン</MCardTitle>
            <MCardBody>
                <template v-if="has_errors">
                    <p v-for="(error_field, ierror_field) in error_fields" :key="ierror_field">
                        {{ error_field.message }}
                    </p>
                </template>
                <div>
                    <p>name</p>
                    <p><input type="text" v-model="name"/></p>
                </div>
                <div>
                    <p>pass</p>
                    <p><input type="password" v-model="password"/></p>
                </div>
                <MPinkButton @click.native="login_clicked">GO</MPinkButton>
            </MCardBody>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"
    import { MPinkButton } from "@/components/button"
    import { Getter, Action, Mutation } from "vuex-class"
    import ErrorField from "@/value_object/ErrorField"
    const namespace = "mgr_store/auth_store"

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
            MPinkButton,
        },
    })
    export default class LoginView extends Vue {
        @Action("login", { namespace }) private login!: (params: { name: string, password: string }) => void
        @Getter("error_fields", { namespace }) private error_fields!: ErrorField[]

        private name: string = ""
        private password: string = ""

        private async login_clicked() {
            this.login({
                name: this.name,
                password: this.password,
            })
        }

        private has_errors(): boolean {
            return this.error_fields.length > 0

        }

    }
</script>

<style lang="scss" scoped>
</style>
