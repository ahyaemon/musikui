<template>
    <div>
        <MCard>
            <MCardTitle>今週の問題管理</MCardTitle>
            <MCardSubtitle>新規登録</MCardSubtitle>
            <MCardBody>
                <div class="field">
                    <p>掲載日付:</p>
                    <input type="text" v-model="_publish_date"/>
                </div>
                <div class="field">
                    <p>ファイル選択</p>
                    <input type="file" multiple @change="files_selected"/>
                </div>
                <div class="field">
                    <p>コメント</p>
                    <textarea v-model="_comment"></textarea>
                </div>
                <div class="field">
                    <MPinkButton @click.native="submit_new_contest">GO</MPinkButton>
                </div>
            </MCardBody>
        </MCard>
        <MCard>
            <MCardSubtitle>掲載日付の変更</MCardSubtitle>
            <MCardBody>
                <div class="field">
                    <select v-model="_selected_contest_id">
                        <option
                                v-for="(contest, icontest) in recent_contests.contests"
                                :key="icontest"
                                :value="contest.id">
                            {{ contest.date.format() }}
                        </option>
                    </select>
                </div>
                <div class="field">
                    <MPinkButton @click.native="submit_current_contest_id">GO</MPinkButton>
                </div>
            </MCardBody>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"
    import { MPinkButton } from "@/components/button"
    import { Getter, Action, Mutation } from "vuex-class"
    import MusikuiDate from "@/value_object/MusikuiDate"
    import Contest from "@/domain/Contest"
    import { RecentContests } from "@/store/mgr/new_contest/types"
    const namespace = "mgr_store/new_contest_store"

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
            MPinkButton,
        },
    })
    export default class NewContestMgrView extends Vue {
        @Getter("publish_date", { namespace }) private publish_date!: MusikuiDate
        @Getter("comment", { namespace }) private comment!: string
        @Getter("recent_contests", { namespace }) private recent_contests!: RecentContests
        @Getter("selected_contest_id", { namespace }) private selected_contest_id!: number
        @Mutation("set_comment", { namespace }) private set_comment!: (comment: string) => void
        @Mutation("set_publish_date", { namespace }) private set_publish_date!: (publish_date: string) => void
        @Mutation("set_next_sunday", { namespace }) private set_next_sunday!: () => void
        @Mutation("set_files", { namespace }) private set_files!: (files: FileList) => void
        @Mutation("set_selected_contest_id", { namespace }) private set_selected_contest_id!: (id: number) => void
        @Action("fetch_recent_contests", { namespace }) private fetch_recent_contests!: () => void
        @Action("update_current_contest_id", { namespace }) private update_current_contest_id!: () => void
        @Action("add_new_contest", { namespace }) private add_new_contest!: () => void

        private created() {
            this.set_next_sunday()
            this.fetch_recent_contests()
        }

        private files_selected(elem: any): void {
            this.set_files(elem.target.files)
        }

        private async submit_new_contest() {
            await this.add_new_contest()
            await this.fetch_recent_contests()
        }

        private submit_current_contest_id(): void {
            this.update_current_contest_id()
        }

        get _comment(): string {
            return this.comment
        }

        set _comment(comment: string) {
            this.set_comment(comment)
        }

        get _publish_date(): string {
            return this.publish_date.format()
        }

        set _publish_date(date: string) {
            if (date.match(/\d{4}\/\d{2}\/\d{2}/)) {
                this.set_publish_date(date)
            }
        }

        get _selected_contest_id(): number {
            return this.selected_contest_id
        }

        set _selected_contest_id(id: number) {
            this.set_selected_contest_id(id)
        }

    }
</script>

<style lang="scss" scoped>
    .field {
        margin: 0px 0px 20px 0px;

        p {
            color: #333;
            font-size: 90%;
            font-weight: bold;
        }
    }
</style>
