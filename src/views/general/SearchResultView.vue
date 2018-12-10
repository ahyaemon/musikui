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
    const namespace: string = "search_question_store"

    @Component({
        components: {
            MSearchForm,
            MCard,
        },
    })
    export default class SearchQuestionPage extends Vue {

        private created() {
            console.log(this.$route.params)
        }

    }
</script>

<style lang="scss" scoped>
</style>