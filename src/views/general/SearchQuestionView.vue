<template>
    <div>
        <MCard>
            <MCardTitle>過去問たち</MCardTitle>
            <MSearchForm />
        </MCard>
        <MCard>
            <MOldContestList />
        </MCard>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import { MSearchForm, MOldContestList } from "@/components/search"
    import { MCard, MCardTitle, MCardBody } from "@/components/card"
    import SearchCondition from "@/domain/SearchCondition"
    import { Getter, Action, Mutation } from "vuex-class"
    const namespace: string = "general_store/search_question_store"

    @Component({
        components: {
            MSearchForm,
            MOldContestList,
            MCard,
            MCardTitle,
        },
    })
    export default class SearchQuestionPage extends Vue {
        @Action("fetch_max_level_and_col", { namespace }) private fetch_max_level_and_col!: () => void
        @Action("fetch_old_contest_infos", { namespace }) private fetch_old_contest_infos!: () => void

        /**
         * 以下を取得する
         * - [最大レベル/最大列数]
         * - [過去コンテストの情報]
         */
        private created() {
            // TODO こいつらを実装する
            this.fetch_max_level_and_col()
            this.fetch_old_contest_infos()
        }

    }
</script>

<style lang="scss" scoped>
</style>