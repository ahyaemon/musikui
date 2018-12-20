<template>
    <div>
        <MCard>
            <MCardTitle>Musikui</MCardTitle>
            <MCardSubtitle>New</MCardSubtitle>
            <MCardBody>
                <div class="field">
                    <input type="file" multiple v-on:change="files_selected"/>
                </div>
                <MPinkButton>Go</MPinkButton>
            </MCardBody>

            <MCardSubtitle>Update</MCardSubtitle>
            <MCardBody>
                <MPaging
                        :current_page_number="paging.current_page_number"
                        :page_amount="page_amount"
                        @change_page_clicked="change_page_clicked"
                />
                <MMgrTable
                        :colnames="colnames"
                        :contents="musikuis"
                        @edit_clicked="edit_clicked"
                />
            </MCardBody>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"
    import { MPinkButton } from "@/components/button"
    import { MPaging } from "@/components/paging"
    import { MMgrTable } from "@/components/mgr_table"
    import { Getter, Action, Mutation } from "vuex-class"
    import Musikui from "@/domain/Musikui"
    import Paging from "@/value_object/Paging"
    const namespace = "mgr_store/musikui_store"

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
            MPinkButton,
            MPaging,
            MMgrTable,
        },
    })

    export default class MusikuiMgrView extends Vue {
        @Mutation("set_files", { namespace }) private set_files!: (files: FileList) => void
        @Mutation("set_page_number", { namespace }) private set_page_number!: (page_number: number) => void
        @Action("fetch_musikuis", { namespace }) private fetch_musikuis!: () => void
        @Getter("musikuis", { namespace }) private musikuis!: Musikui
        @Getter("paging", { namespace }) private paging!: Paging
        @Getter("page_amount", { namespace }) private page_amount!: number

        private colnames: string[] = [
            "id",
            "level",
            "comment",
            "mark",
            "nrow",
            "ncol",
        ]

        private created(): void {
            this.fetch_musikuis()
        }

        private files_selected(elem: any): void {
            this.set_files(elem.target.files)
        }

        private change_page_clicked(page_number: number): void {
            this.set_page_number(page_number)
        }

        private edit_clicked(musikui_id: number): void {
            this.$router.push(`/mgr/musikui/edit/${musikui_id}`)
        }

    }
</script>

<style lang="scss" scoped>
</style>
