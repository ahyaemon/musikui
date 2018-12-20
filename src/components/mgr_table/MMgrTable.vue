<template>
    <table class="mgr-table">
        <thead>
            <tr>
                <th v-for="(colname, icolname) in colnames" :key="icolname" v-text="colname"/>
                <th>edit</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(content, icontent) in contents" :key="icontent">
                <td v-for="(colname, icolname) in colnames" :key="icolname" v-text="content[colname]"/>
                <td><MPinkButton @click.native="edit_clicked(content.id)">Go</MPinkButton></td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit } from "vue-property-decorator"
    import { MPinkButton } from "@/components/button"

    @Component({
        components: {
            MPinkButton,
        },
    })
    export default class MMgrTable extends Vue {

        @Prop() private colnames!: string
        @Prop() private contents!: any[]

        @Emit("edit_clicked")
        private edit_clicked(id: number): number {
            return id
        }

    }
</script>

<style lang="scss" scoped>
    .mgr-table {
        width: 100%;
        th {
            padding: 10px;
            background-color: rgb(107, 138, 116);
            color: white;
            border: 1px solid white;
        }
        td {
            border: 1px solid grey;
            padding: 10px;
        }
    }
</style>