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
            <MAnswerForm
                    :formula="article.musikui.formula"
                    :mark="article.musikui.mark"
                    :musikui_id="article.musikui.id"
                    @correct_answer_submitted="correct_answer_submitted"
            />
        </div>

        <div v-if="submitted_correct_answer">
            <MCommentForm
                    :answer_datetime="answer_datetime"
                    :musikui_id="article.musikui.id"
            />
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
    import MCommentForm from "./MCommentForm.vue"
    import MusikuiArticle from "@/domain/MusikuiArticle"

    @Component({
        components: {
            MMusikuiTable,
            MAnswerForm,
            MRespondentList,
            MCommentForm,
        },
    })
    export default class MMusikuiArticle extends Vue {

        @Prop() private article!: MusikuiArticle
        private submitted_correct_answer: boolean = false
        private answer_datetime: string = ""

        private correct_answer_submitted(answer_datetime: string) {
            this.answer_datetime = answer_datetime
            this.submitted_correct_answer = true
        }

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
