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

    @Component({
        components: {
            MNav,
            MFooter,
        },
    })
    export default class MgrView extends Vue {

        private links = [
            { url: "/mgr/new-contest", title: "今週の問題" },
            { url: "/mgr/musikui", title: "musikui" },
            { url: "/mgr/contest", title: "contest" },
            { url: "/mgr/respondent", title: "respondent" },
            { url: "/mgr/admin", title: "admin" },
            { url: "/mgr/develop", title: "develop" },
            { url: "/", title: "もどる" },
        ]

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
