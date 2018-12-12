<template>
    <div>
        <MCard>
            <MCardTitle>コラム</MCardTitle>
            <MCardBody>
                <div class="m-card">
                    コラムを記載する
                </div>
            </MCardBody>
        </MCard>
    </div>
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