<template>
    <div id="search">
        <MCardSubtitle>
            <h3>検索</h3>
        </MCardSubtitle>
        <MCardBody>
            <form>
                <div>
                    <span>レベル:</span>
                    <select v-model="search_condition.min_level">
                        <option v-for="(level, ilevel) in max_level" :key="ilevel">
                            {{ level }}
                        </option>
                    </select>
                    <span>~</span>
                    <select v-model="search_condition.max_level">
                        <option v-for="(level, ilevel) in max_level" :key="ilevel">
                            {{ level }}
                        </option>
                    </select>
                </div>
                <div>
                    <span>タイプ:</span>
                    <span>
                        <input type="checkbox" id="mark-plus" v-model="search_condition.plus_selected" />
                        <label for="mark-plus">＋</label>
                    </span>
                    <span>
                        <input type="checkbox" id="mark-multiple" v-model="search_condition.multiple_selected"/>
                        <label for="mark-multiple">×</label>
                    </span>
                    <span>
                        <input type="checkbox" id="mark-divide" v-model="search_condition.divide_selected"/>
                        <label for="mark-divide">÷</label>
                    </span>
                </div>
                <div>
                    <span>列数:</span>
                    <select v-model="search_condition.min_col">
                        <option v-for="(col, icol) in max_col" :key="icol">
                            {{ col }}
                        </option>
                    </select>
                    <span>~</span>
                    <select v-model="search_condition.max_col">
                        <option v-for="(col, icol) in max_col" :key="icol">
                            {{ col }}
                        </option>
                    </select>
                </div>
                <div>
                    <MPinkButton @click.native="search">検索</MPinkButton>
                </div>
            </form>
        </MCardBody>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Emit } from "vue-property-decorator"
    import { MCardBody, MCardSubtitle } from "@/components/card"
    import { MPinkButton } from "@/components/button"
    import SearchCondition from "@/value_object/SearchCondition"
    import { Getter, Action } from "vuex-class"
    const namespace: string = "general_store/search_question_store"

    @Component({
        components: {
            MCardSubtitle,
            MCardBody,
            MPinkButton,
        },
    })
    export default class SearchForm extends Vue {
        @Getter("search_condition", { namespace }) private search_condition!: SearchCondition
        @Getter("max_level", { namespace }) private max_level!: number
        @Getter("max_col", { namespace }) private max_col!: number
        @Getter("search_url", { namespace }) private search_url!: string

        private search() {
            this.$router.push(this.search_url)
        }

    }
</script>

<style lang="scss" scoped>
    #search {
        background-color: white;
        margin: 0px 0 10px 0;

        .abutton {
            display: inline-block;
            border: none;
            background-color: rgb(103, 117, 37);
            padding: 10px 40px 10px 40px;
            border-radius: 4px;
            color: white;
            font-weight: bold;
            margin: 20px 0 20px 0;
            text-align: center;
            text-decoration: none;
            padding-top: 10px;
            font-size: 100%;
        }
    }
</style>