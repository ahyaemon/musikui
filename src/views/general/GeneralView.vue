<template>
    <div id="index">
        <MNav :links="links"/>
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
    export default class GeneralView extends Vue {

        private links: any[] = [
            { url: "/how", title: "解き方" },
            { url: "/", title: "今週の問題" },
            { url: "/search-question", title: "過去問たち" },
            { url: "/column", title: "コラム" },
            { url: "/about", title: "About" },
            { url: "/mgr/new-contest", title: "管理" },
        ]

    }
</script>

<style lang="scss" scoped>
    #index {
        min-height: 100vh;
        background-image: url("../..//assets/background.jpg");
        background-repeat: repeat;

        main {
            padding-top: 80px;
        }
    }
</style>
