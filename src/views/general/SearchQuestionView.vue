<template>
    <div>
        <MCard>
            <h2>過去問たち</h2>
            <MSearchForm />
            <MOldContestList />
        </MCard>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import MSearchForm from "@/components/search/MSearchForm.vue"
    import MOldContestList from "@/components/search/MOldContestList.vue"
    import MCard from "@/components/MCard.vue"
    import SearchCondition from "@/domain/SearchCondition"
    import { Getter, Action, Mutation } from "vuex-class"
    const namespace: string = "search_question_store"

    @Component({
        components: {
            MSearchForm,
            MOldContestList,
            MCard,
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