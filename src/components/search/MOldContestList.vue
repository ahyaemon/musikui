<template>
    <div id="list">
        <div id="list-head">
            <h3>一覧</h3>
        </div>
        <div id="list-content">
            <p v-for="(info, iinfo) in old_contest_infos" :key="iinfo">
                <router-link :to="'/old-contest/' + info.contest_number">
                    <span>第{{ info.contest_number }}回 {{ info.date }}の問題</span>
                </router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import fetcher from "@/util/fetcher"
    import { OldContestInfo } from "@/store/search_question/types"
    import { Getter, Action } from "vuex-class"
    const namespace: string = "search_question_store"

    @Component
    export default class OldContestList extends Vue {

        @Getter("old_contest_infos", { namespace }) private old_contest_infos!: OldContestInfo[]

    }
</script>

<style lang="scss" scoped>
</style>