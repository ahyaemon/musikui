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
    import { SearchCondition } from "@/store/search_question/types"
    import { Getter, Action, Mutation } from "vuex-class"
    const namespace: string = "search_question"

    @Component({
        components: {
            MSearchForm,
            MOldContestList,
            MCard,
        },
    })
    export default class SearchQuestionPage extends Vue {

    }
</script>

<style lang="scss" scoped>
</style>