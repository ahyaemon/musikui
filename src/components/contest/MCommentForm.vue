<template>
    <div>
        <!-- <p>正解！！{{ answer_datetime }}</p>
        <p>よかったらコメントをば</p>
        <p> {{ comment_error_message }}</p>
        <p v-if="commented">コメントを登録しました。</p> -->
        <p>名前：<input type="text" v-model="name" :disabled="commented"/></p>
        <p>コメント：<input type="text" v-model="comment" :disabled="commented"/></p>
        <MPinkButton @click.native="submit_comment_clicked" :disabled="commented">送信</MPinkButton>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { MPinkButton } from "@/components/button"
    import { Component, Prop } from "vue-property-decorator"

    @Component({
        components: {
            MPinkButton,
        },
    })
    export default class MCommentForm extends Vue {
        private commented: boolean = false
        private name: string = ""
        private comment: string = ""

        private submit_comment_clicked() {

        }

    }

</script>