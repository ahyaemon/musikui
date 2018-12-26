<template>
    <div>
        <MCard>
            <MCardTitle>ERROR!!</MCardTitle>
            <MCardBody>
                なんかした？
            </MCardBody>
        </MCard>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
        },
    })
    export default class ErrorView extends Vue {
    }
</script>
