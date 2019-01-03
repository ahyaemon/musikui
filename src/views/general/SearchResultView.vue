<template>
    <div>
        <Spinner :is_active="is_waiting"/>
        <MCard>
            <MCardTitle>過去問たち</MCardTitle>
            <MSearchForm />
        </MCard>

        <MCard>
            <MCardTitle>検索結果</MCardTitle>
            <MCardSubtitle>検索条件</MCardSubtitle>
            <p>{{ search_result_label }}</p>
            <p>{{ search_result_amount }}件</p>
        </MCard>

        <MCard v-for="(article, iarticle) in musikui_articles" :key="iarticle" :id="'a' + (iarticle + 1)">
            <MMusikuiArticle :article="article"/>
        </MCard>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import { Spinner } from "@/components/spinner"
    import { MSearchForm } from "@/components/search"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"
    import { MMusikuiArticle } from "@/components/contest"
    import SearchCondition from "@/value_object/SearchCondition"
    import { Getter, Action, Mutation } from "vuex-class"
    import MusikuiArticle from "@/value_object/MusikuiArticle"
    const namespace: string = "general_store/search_result_store"

    Component.registerHooks([
        "beforeRouteUpdate",
    ])

    @Component({
        components: {
            Spinner,
            MSearchForm,
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
            MMusikuiArticle,
        },
    })
    export default class SearchQuestionPage extends Vue {

        @Mutation("set_is_waiting", { namespace }) private set_is_waiting!: (is_waiting: boolean) => void
        @Getter("is_waiting", { namespace }) private is_waiting!: boolean
        @Action("set_searched_condition", { namespace }) private set_searched_condition!: (params: any) => void
        @Action("search_question", { namespace }) private search_question!: () => void
        @Getter("musikui_articles", { namespace }) private musikui_articles!: MusikuiArticle
        @Getter("search_result_label", { namespace }) private search_result_label!: string
        @Getter("search_result_amount", { namespace }) private search_result_amount!: number

        // urlからsearch_conditionを復元する用
        @Action("set_search_condition", { namespace: "general_store/search_question_store" }) private set_search_condition!: (params: any) => void

        private mounted() {
            this.set_is_waiting(true)
            this.set_searched_condition(this.$route.params)
            this.set_search_condition(this.$route.params)
            this.search_question()
        }

        private beforeRouteUpdate(to: any, from: any, next: () => void) {
            this.set_is_waiting(true)
            this.set_searched_condition(to.params)
            this.set_search_condition(to.params)
            this.search_question()
            next()
        }

    }
</script>

<style lang="scss" scoped>
</style>