<template>
    <div class="musikui-table">
        <table v-bind:class="class_ncol">
            <MMusikuiRow v-for="(row, irow) in hissan" :key="irow" :row="row"/>
        </table>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from "vue-property-decorator"
    import MMusikuiRow from "./MMusikuiRow.vue"

    @Component({
        components: {
            MMusikuiRow,
        },
    })
    export default class MMusikuiTable extends Vue {

        @Prop() private hissan!: any[][]

        /**
         * 動的に ncol-10 といったクラス名を作成する
         */
        private get class_ncol() {
            const obj: any = {}
            const ncol = "ncol-" + this.hissan[0].length
            obj[ncol] = true
            return obj
        }

    }
</script>

<style lang="scss">
    @import "@/style/cell/cell-base.scss";
    .musikui-table {
        table {
            border-collapse: collapse;
            margin-left: auto;
            margin-right: auto;
        }
        @include cell-base;
    }

</style>