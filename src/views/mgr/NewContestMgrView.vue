<template>
    <div>
        <MCard>
            <MCardTitle>今週の問題管理</MCardTitle>
            <MCardSubtitle>新規登録</MCardSubtitle>
            <MCardBody>
                ...
            </MCardBody>
        </MCard>
        <MCard>
            <MCardSubtitle>掲載日付の変更</MCardSubtitle>
            <MCardBody>
                ...
            </MCardBody>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
        },
    })
    export default class NewContestMgrView extends Vue {}
</script>
