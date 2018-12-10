<template>
    <tr>
        <MMusikuiCell v-for="(cell, icell) in row" :key="icell" :cell="cell" />
    </tr>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from "vue-property-decorator"
    import MMusikuiCell from "./MMusikuiCell.vue"

    @Component({
        components: {
            MMusikuiCell,
        },
    })
    export default class MMusikuiRow extends Vue {

        @Prop() private row!: any

    }
</script>
