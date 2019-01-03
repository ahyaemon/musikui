<template>
    <div>
        <Spinner :is_active="is_waiting"/>
        <MCard class="top">
            <MCardTitle>{{ contest.date.format() }}の問題</MCardTitle>
            <MCardBody>
                <p>{{ contest.comment }}</p>
                <hr>
                <MJumpList :musikuis="contest.musikuis"/>
            </MCardBody>
        </MCard>

        <MCard v-for="(article, iarticle) in musikui_articles" :key="iarticle" :id="'a' + (iarticle + 1)">
            <MMusikuiArticle :article="article"/>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { Spinner } from "@/components/spinner"
    import { MCard, MCardTitle, MCardBody } from "@/components/card"
    import { MMusikuiArticle, MRespondentList, MJumpList } from "@/components/contest"
    import { Mutation, Getter, Action } from "vuex-class"
    import Contest from "@/domain/Contest"
    import MusikuiArticle from "@/value_object/MusikuiArticle"
    const namespace = "general_store/old_contest_store"

    @Component({
        components: {
            Spinner,
            MCard,
            MCardTitle,
            MCardBody,
            MMusikuiArticle,
            MRespondentList,
            MJumpList,
        },
    })
    export default class OldContestView extends Vue {

        @Mutation("set_is_waiting", { namespace }) private set_is_waiting!: (is_waiting: boolean) => void
        @Getter("is_waiting", { namespace }) private is_waiting!: boolean
        @Getter("contest", { namespace }) private contest!: Contest
        @Getter("musikui_articles", { namespace }) private musikui_articles!: MusikuiArticle[]
        @Action("fetch_contest", { namespace }) private fetch_contest!: (contest_id: number) => void

        private mounted() {
            this.set_is_waiting(true)
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
