<template>
    <MCard>
        <MCardTitle>コラム</MCardTitle>
        <MCardBody>
            コラムが何もないという真実
        </MCardBody>
    </MCard>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import { MCard, MCardTitle, MCardBody } from "@/components/card"

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardBody,
        },
    })
    export default class HowView extends Vue {
    }
</script>