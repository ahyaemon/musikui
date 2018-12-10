<template>
    <div>
        <MCard>
            <h2>コラム</h2>
            <div class="m-card">
                コラムを記載する
            </div>
        </MCard>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import MCard from "@/components/MCard.vue"

    @Component({
        components: {
            MCard,
        },
    })
    export default class HowView extends Vue {
    }
</script>