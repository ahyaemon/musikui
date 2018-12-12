<template>
    <div>
        <MCard class="top">
            <h2>{{ contest.get_date() }}の問題</h2>
            <p>{{ contest.comment }}</p>
            <hr>
            <MJumpList :musikuis="contest.musikuis"/>
        </MCard>

        <MCard v-for="(article, iarticle) in musikui_articles" :key="iarticle" :id="'a' + (iarticle + 1)">
            <MMusikuiArticle :article="article"/>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { MCard } from "@/components/card"
    import { MMusikuiArticle, MRespondentList, MJumpList } from "@/components/contest"
    import { Getter, Action } from "vuex-class"
    import Contest from "@/domain/Contest"
    import MusikuiArticle from "@/domain/MusikuiArticle"
    const namespace = "old_contest_store"

    @Component({
        components: {
            MCard,
            MMusikuiArticle,
            MRespondentList,
            MJumpList,
        },
    })
    export default class OldContestView extends Vue {

        @Getter("contest", { namespace }) private contest!: Contest
        @Getter("musikui_articles", { namespace }) private musikui_articles!: MusikuiArticle[]
        @Action("fetch_contest", { namespace }) private fetch_contest!: (contest_id: number) => void

        private created() {
            this.fetch_contest(Number(this.$route.params.contest_id))
        }

    }
</script>

<style lang="scss" scoped>
    .jump {
        a {
            text-decoration: none;
        }
    }
</style>
