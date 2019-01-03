<template>
    <div>
        <Spinner :is_active="is_waiting"/>
        <MCard class="top">
            <MCardTitle>今週の問題</MCardTitle>
            <MCardBody>
                <p>{{ current_contest.date.format() }}</p>
                <p>{{ current_contest.comment }}</p>
                <br>
                <hr>
                <br>
                <div>
                    <p>
                        <span>前回の最難問</span>
                        <span>Q{{ prev_last_musikui_number }} (Lv. {{ prev_last_musikui.level }})</span>
                        <span>回答者様</span>
                        <MRespondentList :respondents="prev_last_musikui.respondents"/>
                    </p>
                    <!-- 全回答者をドロップダウンリストで表示する形式はやりすぎな気がする -->
                    <!-- <a @click="switch_respondent_displayed">
                        <span v-if="respondent_displayed">▼</span>
                        <span v-else>▶</span>
                        先週の覇者
                    </a>
                    <div v-if="respondent_displayed">
                        <div v-for="(musikui, imusikui) in prev_contest.musikuis" :key="musikui.id">
                            <p>
                                <fas icon="compact-disc"/>
                                <span>Q{{ imusikui + 1 }}(Lv.{{ musikui.level }})</span>
                            </p>
                            <MRespondentList :respondents="musikui.respondents"/>
                        </div>
                    </div> -->
                </div>
                <br>
                <hr>
                <p>次回は {{ current_contest.date.next_sunday().format() }} になります。</p>
                <p>それでは、問題をお楽しみください</p>
                <MJumpList :musikuis="current_contest.musikuis"/>
            </MCardBody>
        </MCard>

        <MCard v-for="(article, iarticle) in musikui_articles" :key="iarticle" :id="'a' + (iarticle + 1)">
            <MMusikuiArticle
                    :article="article"
                    @comment_submitted="comment_submitted"
            />
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { Spinner } from "@/components/spinner"
    import { MCard, MCardBody, MCardTitle } from "@/components/card"
    import { MMusikuiArticle, MRespondentList, MJumpList } from "@/components/contest"
    import { Mutation, Getter, Action } from "vuex-class"
    import Contest from "@/domain/Contest"
    import MusikuiArticle from "@/value_object/MusikuiArticle"
    const namespace = "general_store/new_contest_store"

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
    export default class NewContestView extends Vue {

        @Mutation("set_is_waiting", { namespace }) private set_is_waiting!: (is_waiting: boolean) => void
        @Getter("is_waiting", { namespace }) private is_waiting!: boolean
        @Getter("prev_contest", { namespace }) private prev_contest!: Contest
        @Getter("current_contest", { namespace }) private current_contest!: Contest
        @Getter("musikui_articles", { namespace }) private musikui_articles!: MusikuiArticle[]
        @Action("fetch_new_contest", { namespace }) private fetch_new_contest!: () => void
        @Action("fetch_respondents", { namespace }) private fetch_respondents!: (params: any) => void
        private respondent_displayed: boolean = false

        private mounted() {
            this.set_is_waiting(true)
            this.fetch_new_contest()
        }

        private switch_respondent_displayed(): void {
            this.respondent_displayed = !this.respondent_displayed
        }

        private comment_submitted(musikui_id: number) {
            this.fetch_respondents({ musikui_id })
        }

        private get prev_last_musikui_number() {
            return this.prev_contest.musikuis.length
        }

        private get prev_last_musikui() {
            return this.prev_contest.musikuis[this.prev_last_musikui_number - 1]
        }

    }
</script>

<style lang="scss" scoped>
</style>
