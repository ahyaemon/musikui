<template>
    <div>
        <MCard class="top">
            <h2>今週の問題</h2>
            <p>{{ current_contest.get_date() }}</p>
            <p>{{ current_contest.comment }}</p>

            <div>
                <a @click="switch_respondent_displayed">
                    <span v-if="respondent_displayed">▼</span>
                    <span v-else>▶</span>
                    先週の覇者
                </a>
                <div v-if="respondent_displayed">
                    <div v-for="(musikui, imusikui) in prev_contest.musikuis" :key="musikui.id">
                        <p>
                            <span>Q{{ imusikui + 1 }}(Lv.{{ musikui.level }})</span>
                        </p>
                        <p>回答者</p>
                        <p v-for="(respondent, irespondent) in musikui.respondents" :key="respondent.id">
                            <span>{{ irespondent + 1 }}位 {{ respondent.name }}さん: {{ respondent.comment }}</span>
                        </p>
                    </div>
                </div>
            </div>
            <p>次回は {{ current_contest.get_next_sunday() }} になります。</p>
            <p>それでは、問題をお楽しみください</p>

            <hr>

            <p v-for="(musikui, imusikui) in prev_contest.musikuis" :key="imusikui" class="jump">
                <a href="#" v-scroll-to="'#a' + (imusikui + 1)" >
                    <span>Q{{ imusikui + 1 }}(Lv. {{ musikui.level }} {{ musikui.difficulty }})へJump!!</span>
                    <fas icon="dove"/>
                </a>
            </p>
        </MCard>

        <MCard v-for="(article, iarticle) in musikui_articles" :key="iarticle" :id="'a' + (iarticle + 1)">
            <MMusikuiArticle :article="article"/>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import MCard from "@/components/MCard.vue"
    import MMusikuiArticle from "@/components/musikui/MMusikuiArticle.vue"
    import { Getter, Action } from "vuex-class"
    import Contest from "@/domain/Contest"
    import { MusikuiArticle } from "@/store/new_contest/types"
    const namespace = "new_contest_store"

    @Component({
        components: {
            MCard,
            MMusikuiArticle,
        },
    })
    export default class NewContestView extends Vue {

        @Getter("prev_contest", { namespace }) private prev_contest!: Contest
        @Getter("current_contest", { namespace }) private current_contest!: Contest
        @Getter("create_musikui_articles", { namespace }) private musikui_articles!: MusikuiArticle[]
        @Action("fetch_new_contest", { namespace }) private fetch_new_contest!: () => void
        private respondent_displayed: boolean = false

        private created() {
            if (!this.current_contest.has_musikuis()) {
                this.fetch_new_contest()
            }
        }

        private switch_respondent_displayed(): void {
            this.respondent_displayed = !this.respondent_displayed
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
