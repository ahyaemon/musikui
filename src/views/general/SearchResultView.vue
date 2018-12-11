<template>
    <div>
        <MCard>
            <h2>検索</h2>
            <MSearchForm />
        </MCard>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import MSearchForm from "@/components/search/MSearchForm.vue"
    import MCard from "@/components/MCard.vue"
    import SearchCondition from "@/domain/SearchCondition"
    import { Getter, Action, Mutation } from "vuex-class"
    const namespace: string = "search_result_store"

    Component.registerHooks([
        "beforeRouteUpdate",
    ])

    @Component({
        components: {
            MSearchForm,
            MCard,
        },
    })
    export default class SearchQuestionPage extends Vue {

        @Action("set_searched_condition", { namespace }) private set_searched_condition!: (params: any) => void
        @Action("search_question", { namespace }) private search_question!: () => void

        // TODO ページ表示時に、urlparamsからsearch_conditionを復元する必要がある

        private created() {
            this.set_searched_condition(this.$route.params)
            this.search_question()
        }

        private beforeRouteUpdate(to: any, from: any, next: () => void) {
            this.set_searched_condition(to.params)
            this.search_question()
            next()
        }

    }
</script>

<style lang="scss" scoped>
</style>