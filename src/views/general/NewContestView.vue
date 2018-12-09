<template>
    <div>
        <MCard class="top">
            <h2>今週の問題</h2>
            <p>{{ current_contest.get_date() }}</p>
            <p>{{ current_contest.comment }}</p>

            <p>先週の覇者</p>
            <div v-for="(musikui, imusikui) in prev_contest.musikuis" :key="imusikui">
                <p>
                    <span>Q{{ imusikui }}</span>
                    <span>(Lv.{{ musikui.level }})</span>
                </p>
                <p>回答者</p>
                <p v-for="(respondent, irespondent) in musikui.respondents" :key="irespondent">
                    <span>{{ irespondent }}位 {{ respondent.name }}さん: {{ respondent.comment }}</span>
                </p>
            </div>
            <p>次回は {{ current_contest.get_next_sunday() }} になります。</p>
            <p>それでは、問題をお楽しみください</p>

            <hr>

            <p v-for="(musikui, imusikui) in prev_contest.musikuis" :key="imusikui">
                Q{{ imusikui }}(Lv. {{musikui.level }})へJump!!
            </p>

            <p>jump</p>
        </MCard>

        <MCard v-for="(musikui, imusikui) in current_contest.musikuis" :key="imusikui">
            <MMusikuiArticle :musikui="musikui"/>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import MCard from "@/components/MCard.vue"
    import { Getter, Action } from "vuex-class"
    import Contest from "@/domain/Contest"
    const namespace = "new_contest_store"

    @Component({
        components: {
            MCard,
        },
    })
    export default class NewContestView extends Vue {

        @Getter("prev_contest", { namespace }) private prev_contest!: Contest
        @Getter("current_contest", { namespace }) private current_contest!: Contest
        @Action("fetch_new_contest", { namespace }) private fetch_new_contest!: () => void

        private created() {
            if (!this.current_contest.has_musikuis()) {
                this.fetch_new_contest()
            }
        }

    }
</script>
