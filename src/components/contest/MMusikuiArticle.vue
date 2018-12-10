<!--
    FIXME slotで過去問の日付をいれるのはどうかと思う
-->
<template>
    <article class="musikui-article m-card">
        <div class="header">
            <span>
                <fas icon="edit"/>
                {{ article.header }}
            </span>
        </div>

        <div class="comment">
            <span>{{ article.musikui.comment }}</span>
        </div>

        <div class="question">
            <MMusikuiTable :hissan="article.musikui.hissan_question" />
        </div>

        <div class="answer">
            <MAnswerForm :formula="article.musikui.formula" :mark="article.musikui.mark" :musikui_id="article.musikui.id"/>
        </div>

        <div class="respondent">
            <MRespondentList :respondents="article.musikui.respondents"/>
        </div>

    </article>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from "vue-property-decorator"
    import MMusikuiTable from "./MMusikuiTable.vue"
    import MAnswerForm from "./MAnswerForm.vue"
    import MRespondentList from "./MRespondentList.vue"
    import { Getter, Action } from "vuex-class"
    import { MusikuiArticle } from "@/store/new_contest/types"
    const namespace = "new_contest_store"

    @Component({
        components: {
            MMusikuiTable,
            MAnswerForm,
            MRespondentList,
        },
    })
    export default class MMusikuiArticle extends Vue {

        @Prop() private article!: MusikuiArticle

    }
</script>

<style lang="scss" scoped>
    .musikui-article {
        margin: 10px 0 10px 0;
        text-align: center;
    }

    .header {
        font-size: 120%;
        border-bottom: 1px solid black;

        i {
            font-size: 140%;
        }
    }

    .comment {
        color: #882727;
        margin-top: 10px;
    }

    .question {
        margin-top: 10px;
    }

    .answer {
        margin-top: 10px;
    }
</style>
