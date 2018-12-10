<template>
    <div id="list">
        <div id="list-head">
            <h3>一覧</h3>
        </div>
        <div id="list-content">
            <p v-for="(info, iinfo) in old_contest_infos" :key="iinfo">
                <router-link :to="'/old-contest/' + info.contest_number">
                    <span>第{{ info.contest_number }}回</span>
                    <span>{{ info.date }}の問題</span>
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
    const namespace: string = "search_question"

    @Component
    export default class OldContestList extends Vue {

        @Getter("old_contest_infos", { namespace }) private old_contest_infos!: OldContestInfo[]
        @Action("fetch_old_contest", { namespace }) private fetch_old_contest!: any
        @Action("set_searched", { namespace }) private set_searched!: any

            private mounted() {
                if (this.old_contest_infos.length === 0) {
                    this.fetch_old_contest()
                }
            }

    }
</script>

<style lang="scss" scoped>
    #list {
        background-color: white;
        margin: 10px 0 10px 0;

        #list-content {
            margin: 10px;
        }
    }
</style>