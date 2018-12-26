<template>
    <div id="index">
        <MNav :links="links" title="管理ページ"/>
        <main>
            <router-view/>
        </main>
        <MFooter/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { MNav, MFooter } from "@/components/layout"
    import { Route } from "vue-router"
    import { Getter, Action, Mutation } from "vuex-class"
    import { state } from "@/store/mgr/auth"
    const namespace = "mgr_store/auth_store"

    Component.registerHooks([
        "beforeRouteEnter",
        "beforeRouteLeave",
        "beforeRouteUpdate",
    ])

    @Component({
        components: {
            MNav,
            MFooter,
        },
    })
    export default class MgrView extends Vue {
        @Getter("is_admin", { namespace }) private is_admin!: boolean

        private links = [
            { url: "/mgr/new-contest", title: "今週の問題" },
            { url: "/mgr/musikui", title: "musikui" },
            { url: "/mgr/contest", title: "contest" },
            { url: "/mgr/respondent", title: "respondent" },
            { url: "/mgr/admin", title: "admin" },
            { url: "/mgr/develop", title: "develop" },
            { url: "/", title: "もどる" },
        ]

        private beforeRouteEnter(to: Route, from: Route, next: any) {
            if (state.is_admin) {
                next()
            } else {
                next("/mgr-login")
            }
        }

        private beforeRouteUpdate(to: Route, from: Route, next: any) {
            if (this.is_admin) {
                next()
            } else {
                next("/mgr-login")
            }
        }

    }
</script>

<style lang="scss" scoped>
    #index {
        min-height: 100vh;
        background-image: url("../../assets/background.jpg");
        background-repeat: repeat;

        main {
            padding-top: 80px;
        }
    }
</style>
