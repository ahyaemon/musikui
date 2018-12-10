<template>
    <td :class="cellClass">
        <template v-if="is_hide">
            <div class="cell">
                <input class="cell-hide" type="text"/>
            </div>
        </template>
        <template v-else-if="is_bar">
            <div class="bar"></div>
        </template>
        <template v-else-if="is_plus">
            <div class="cell">＋</div>
        </template>
        <template v-else-if="is_multiple">
            <div class="cell">×</div>
        </template>
        <template v-else-if="is_divide">
            <div class="cell cell-divide">)</div>
        </template>
        <template v-else-if="is_space">
            <div></div>
        </template>
        <template v-else>
            <div class="cell">{{ cell.v }}</div>
        </template>
    </td>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from "vue-property-decorator"

    @Component
    export default class MMusikuiCell extends Vue {

        @Prop() private cell!: any

        private get is_space(): boolean {
            return this.cell.ct === 0
        }

        private get is_hide(): boolean {
            return this.cell.ct === 5
        }

        private get is_bar(): boolean {
            return this.cell.ct === 7
        }

        private get is_plus(): boolean {
            return this.cell.ct === 2
        }

        private get is_multiple(): boolean {
            return this.cell.ct === 3
        }

        private get is_divide(): boolean {
            return this.cell.ct === 4
        }

        private get cellClass() {
            return this.cell.ct
        }

        private cellContent(cell: any): string {
            const celltype = cell.ct

            if (celltype === "0") {
                return ""
            }

            if (celltype === "1") {
                return cell.v
            }

            if (celltype === "2") {
                return "＋"
            }

            if (celltype === "3") {
                return "×"
            }

            if (celltype === "4") {
                return "÷"
            }

            if (celltype === "5") {
                return "□"
            }

            if (celltype === "6") {
                return cell.v
            }

            if (celltype === "7") {
                return "_"
            }

            return ""
        }

    }
</script>
<!--
  cell に関するスタイルは、scss/cell 参照
-->