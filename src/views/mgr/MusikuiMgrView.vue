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
                <table class="mgr-table">
                    <thead>
                        <tr>
                            <th v-for="(colname, icolname) in colnames" :key="icolname" v-text="colname"/>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(musikui, imusikui) in musikuis" :key="imusikui">
                            <td v-for="(colname, icolname) in colnames" :key="icolname" v-text="musikui[colname]"/>
                            <td><MPinkButton>Go</MPinkButton></td>
                        </tr>
                    </tbody>
                </table>
            </MCardBody>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"
    import { MPinkButton } from "@/components/button"
    import { Getter, Action, Mutation } from "vuex-class"
    import Musikui from "@/domain/Musikui"
    const namespace = "mgr_store/musikui_store"

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
            MPinkButton,
        },
    })

    export default class MusikuiMgrView extends Vue {
        @Mutation("set_files", { namespace }) private set_files!: (files: FileList) => void
        @Action("fetch_musikuis", { namespace }) private fetch_musikuis!: () => void
        @Getter("musikuis", { namespace }) private musikuis!: Musikui

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

    }
</script>

<style lang="scss" scoped>
    .mgr-table {
        th {
            padding: 10px;
            background-color: rgb(78, 104, 86);
            color: white;
            border: 1px solid white;
        }
        td {
            border: 1px solid grey;
            padding: 10px;
        }

    }
</style>
