<template>
    <div>
        <div class="answer-form">
            <p>{{ answer_error_message }}</p>
            <span v-for="i in formula.lefts.length" :key="i">
                <input type="number"
                        class="input-number"
                        :value="left_answers[i-1]"
                        v-on:input="set_left_answer(i - 1, $event)"
                        :disabled="is_correct"/>
                <span v-if="i < formula.lefts.length">{{ _mark }}</span>
            </span>
            <span>=</span>
            <input class="input-number" type="number" v-model="right_answer" :disabled="is_correct" />
            <MPinkButton @click.native="answer_clicked" :disabled="is_correct">回答</MPinkButton>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop, Emit } from "vue-property-decorator"
    import { MPinkButton } from "@/components/button"
    import Fetcher from "@/util/fetcher"
    import Formula from "@/value_object/Formula"

    @Component({
        components: {
            MPinkButton,
        },
    })
    export default class MAnswerForm extends Vue {

        @Prop() private formula!: Formula
        @Prop() private mark!: string
        @Prop() private musikui_id!: number

        private left_answers: number[] = []
        private right_answer: number | null = null
        private is_correct: boolean = false
        private answer_error_message: string = ""
        private answer_datetime: string = ""

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
            Fetcher.get({
                controller: "NewContestController",
                method: "is_correct_answer",
                params: {
                    formula: JSON.stringify({
                        lefts: this.left_answers,
                        right: this.right_answer,
                    }),
                    musikui_id: this.musikui_id,
                },
            }).then((response) => {
                if (response.errors) {
                    this.answer_error_message = response.errors[0].message
                    return
                }
                this.answer_error_message = ""
                this.is_correct = true
                this.answer_datetime = response.answer_datetime
                this.correct_answer_submitted()
            })
        }

        @Emit("correct_answer_submitted")
        private correct_answer_submitted() {
            return this.answer_datetime
        }

    }
</script>

<style>
    .input-number {
        text-align: right;
    }
</style>
