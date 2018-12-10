<template>
    <div>
        <div class="answer-form">
            <p>{{ answer_error_message }}</p>
            <span v-for="i in left_term_amount" :key="i">
                <input type="text"
                        :value="get_left_answer(i - 1)"
                        v-on:input="set_left_answer(i - 1, $event)"
                        :disabled="is_correct"/>
                <span v-if="i < left_term_amount">{{ _mark }}</span>
            </span>
            <span>=</span>
            <input type="text" v-model="right_answer" :disabled="is_correct" />
            <button type="button" class="bt red" @click="answer_clicked" :disabled="is_correct">回答</button>
        </div>

        <div class="comment-form" v-if="is_correct">
            <p>正解！！{{ answer_datetime }}</p>
            <p>よかったらコメントをば</p>
            <p> {{ comment_error_message }}</p>
            <p v-if="commented">コメントを登録しました。</p>
            <p>名前：<input type="text" v-model="name" :disabled="commented"/></p>
            <p>コメント：<input type="text" v-model="comment" :disabled="commented"/></p>
            <button type="button" class="bt red" @click="comment_clicked">送信</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from "vue-property-decorator"
    import fetcher from "@/util/fetcher"
    import Formula from "@/domain/Formula"

    @Component
    export default class MAnswerForm extends Vue {

        @Prop() private formula!: Formula
        @Prop() private mark!: string
        @Prop() private musikui_id!: number

        private left_answers: string[] = []
        private right_answer: string = ""
        private is_correct: boolean = false
        private answer_error_message: string = ""
        private answer_datetime: string = ""
        private comment_error_message: string = ""
        private commented: boolean = false

        private name: string = ""
        private comment: string = ""

        private get left_term_amount(): number {
            if (!this.formula) {
                return 0
            }
            return this.formula.lefts.length
        }

        private get _mark(): string {
            if (this.mark === "plus") {
                return "＋"
            }
            if (this.mark === "multiple") {
                return "×"
            }
            if (this.mark === "divide") {
                return "÷"
            }

            return ""
        }

        private get_left_answer(i: number) {
            return this.left_answers[i]
        }

        private set_left_answer(i: number, event: any) {
            const value = event.target.value
            const new_data = (value === "") ? "" : value - 0
            this.$set(this.left_answers, i, new_data)
        }

        private answer_clicked() {
            fetcher.post({
                controller: "src/web/AnswerController.php",
                method: "check_answer",
                params: {
                    lefts: JSON.stringify(this.left_answers),
                    right: this.right_answer,
                    musikui_id: this.musikui_id,
                },
            }).then((response) => {
                if (response.data.errors) {
                    this.answer_error_message = response.data.errors[0].message
                    return
                }
                this.answer_error_message = ""
                this.is_correct = true
                this.answer_datetime = response.data.answer_datetime
            })
        }

        private comment_clicked() {
            fetcher.post({
                controller: "src/web/AnswerController.php",
                method: "add_comment",
                params: {
                    name: this.name,
                    comment: this.comment,
                    musikui_id: this.musikui_id,
                },
            }).then((response) => {
                if (response.data.errors) {
                    this.comment_error_message = response.data.errors[0].message
                    return
                }
                this.comment_error_message = ""
                this.commented = true
            })
        }

    }
</script>
