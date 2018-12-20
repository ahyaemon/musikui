<template>
    <div class="paging">
        <button
                v-for="ipage in page_amount"
                :key="ipage"
                :class="{current: ipage==current_page_number}"
                v-text="ipage"
                @click="change_page_clicked(ipage)"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit } from "vue-property-decorator"
    import Paging from "@/value_object/Paging"

    @Component
    export default class MPaging extends Vue {

        @Prop() private current_page_number!: number
        @Prop() private page_amount!: number

        // get page_amount(): number {
        //     return Math.ceil(this.contents.length / this.paging.max_record_amount)
        // }

        @Emit("change_page_clicked")
        private change_page_clicked(page_number: number): number {
            return page_number
        }

    }
</script>

<style lang="scss" scoped>
    .paging {
        font-size: 120%;
        color: grey;

        button {
            border: none;
            background-color: rgba(0, 0, 0, 0);
            margin: 0px 4px 0px 4px;
        }

        .current {
            font-weight: bold;
            font-size: 120%;
            color: black;
        }
    }
</style>