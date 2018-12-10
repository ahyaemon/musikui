<!--
    FIXME slotで過去問の日付をいれるのはどうかと思う
-->
<template>
    <article class="musikui-article m-card">
        <div class="header">
            <span>
                <i class="fas fa-edit"></i>
                {{ article.header }}
            </span>
            <!-- <p>
                <i class="fas fa-edit"></i>
                <span>
                    <slot></slot>
                    Q{{ article.question_number }}
                </span>
                <span> - </span>
                <span>{{ article.difficulty }}</span>
                <span>Lv.{{ article.musikui.level }}</span>
            </p> -->
        </div>

        <div class="comment">
            <span>{{ article.musikui.comment }}</span>
        </div>

        <!-- <div class="question">
            <MusikuiTable :hissan="article.musikui.hissan_question" />
        </div>

        <div class="answer">
            <AnswerForm :formula="article.musikui.formula" :mark="article.musikui.mark" :musikui_id="article.musikui.id"/>
        </div>

        <div class="respondent">
            <RespondentList :respondents="article.musikui.respondents"/>
        </div> -->

    </article>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from "vue-property-decorator"
    import { Getter, Action } from "vuex-class"
    import { MusikuiArticle } from "@/store/new_contest/types"
    const namespace = "new_contest_store"

    @Component
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
