<template>
    <div>
        <MNav :links="links"/>
        <main>
            <router-view/>
        </main>
        <MFooter/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import MNav from "@/components/layout/MNav.vue"
    import MFooter from "@/components/layout/MFooter.vue"

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
    main {
        margin-top: 80px;
    }
</style>
