<template>
    <div class="respondent">
        <p>回答者</p>
        <template v-if="has_respondent">
            <p v-for="(respondent, irespondent) in _respondents" :key="irespondent">
                {{ respondent.rank }} 位 {{ respondent.name }}さん: {{ respondent.comment }}
            </p>
        </template>
        <template v-else>
            <p>誰も解いてないよ</p>
        </template>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from "vue-property-decorator"

    @Component
    export default class MRespondentList extends Vue {

        @Prop() private respondents!: any[]

        private get _respondents(): any[] {
            const a = []
            for (let i = 0; i < this.respondents.length; i++) {
                const r = this.respondents[i]
                r.rank = i + 1
                a.push(r)
            }
            return a
        }

        private get has_respondent(): boolean {
            return (this.respondents) && (this.respondents.length > 0)
        }

    }
</script>

<style scoped>
    .respondent {
        margin: 10px 0 0 0;
        padding: 10px;
        text-align: left;
        background-color: rgba(248, 195, 195, 0.2);
        border-radius: 10px;
    }
</style>