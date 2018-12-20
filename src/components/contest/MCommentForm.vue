<template>
    <div class="comment-form">
        <p>正解！！{{ answer_datetime }}</p>
        <p>よかったらコメントをば</p>

        <p> {{ comment_error_message }}</p>
        <p v-if="commented">コメントを登録しました。</p>

        <p>お名前：</p>
        <p><input class="input-name" type="text" v-model="name" :disabled="commented"/></p>
        <p>コメント：<input class="input-comment" type="text" v-model="comment" :disabled="commented"/></p>

        <MPinkButton @click.native="submit_comment_clicked" :disabled="commented">送信</MPinkButton>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { MPinkButton } from "@/components/button"
    import { Component, Prop } from "vue-property-decorator"
    import Fetcher from "@/util/fetcher"

    @Component({
        components: {
            MPinkButton,
        },
    })
    export default class MCommentForm extends Vue {
        private commented: boolean = false
        private name: string = ""
        private comment: string = ""
        private comment_error_message: string = ""
        @Prop() private answer_datetime!: string
        @Prop() private musikui_id!: number


        private submit_comment_clicked() {
            Fetcher.post({
                controller: "NewContestController",
                method: "add_respondent",
                params: {
                    name: this.name,
                    comment: this.comment,
                    musikui_id: this.musikui_id,
                },
            }).then((response) => {
                if (response.errors) {
                    this.comment_error_message = response.errors[0].message
                    return
                }
                this.comment_error_message = ""
                this.commented = true
            })
        }

    }

</script>

<style lang="scss" scoped>
    .comment-form {
        text-align: left;
        padding: 20px;

        .input-comment {
            width: 100%;
        }
    }
</style>