<template>
    <div>
        <MCard>
            <h2>検索</h2>
            <MSearchForm />
        </MCard>

        <MCard>
            <h3>検索結果</h3>
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
    import MSearchForm from "@/components/search/MSearchForm.vue"
    import MCard from "@/components/MCard.vue"
    import MMusikuiArticle from "@/components/contest/MMusikuiArticle.vue"
    import SearchCondition from "@/domain/SearchCondition"
    import { Getter, Action, Mutation } from "vuex-class"
    import MusikuiArticle from "@/domain/MusikuiArticle"
    const namespace: string = "search_result_store"

    Component.registerHooks([
        "beforeRouteUpdate",
    ])

    @Component({
        components: {
            MSearchForm,
            MCard,
            MMusikuiArticle,
        },
    })
    export default class SearchQuestionPage extends Vue {

        @Action("set_searched_condition", { namespace }) private set_searched_condition!: (params: any) => void
        @Action("search_question", { namespace }) private search_question!: () => void
        @Getter("musikui_articles", { namespace }) private musikui_articles!: MusikuiArticle
        @Getter("search_result_label", { namespace }) private search_result_label!: string
        @Getter("search_result_amount", { namespace }) private search_result_amount!: number

        // urlからsearch_conditionを復元する用
        @Action("set_search_condition", { namespace: "search_question_store" }) private set_search_condition!: (params: any) => void

        private created() {
            this.set_searched_condition(this.$route.params)
            this.set_search_condition(this.$route.params)
            this.search_question()
        }

        private beforeRouteUpdate(to: any, from: any, next: () => void) {
            this.set_searched_condition(to.params)
            this.set_search_condition(to.params)
            this.search_question()
            next()
        }

    }
</script>

<style lang="scss" scoped>
</style>