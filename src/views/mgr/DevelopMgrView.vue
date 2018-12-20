<template>
    <div>
        <MCard>
            <MCardTitle>開発用</MCardTitle>
            <MCardSubtitle>セッション確認</MCardSubtitle>
            <MCardBody>
                <MPinkButton @click.native="show_session">表示</MPinkButton>
                <MPinkButton @click.native="destroy_session">削除</MPinkButton>
                <div class="session_contents">
                    <p v-for="(content, icontent) in session_contents" :key="icontent">
                        {{ content.key }}: {{ content.value }}
                    </p>
                </div>
            </MCardBody>

            <MCardSubtitle>サンプル</MCardSubtitle>
            <MCardBody>
                <MPinkButton>掛け算</MPinkButton>
                <MPinkButton>割り算</MPinkButton>
            </MCardBody>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"
    import { MPinkButton } from "@/components/button"
    import Fetcher from "@/util/fetcher"

    interface SessionContent {
        key: string
        value: string
    }

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
            MPinkButton,
        },
    })
    export default class DevelopMgrView extends Vue {
        private session_destroyed: boolean = false
        private session_contents: SessionContent[] = []

        private destroy_session() {
            Fetcher.post({
                controller: "DevelopMgrController.php",
                method: "destroy_session",
                params: {},
            }).then((response) => {
                    this.session_destroyed = true
                    this.session_contents = []
            })
        }

        private show_session() {
            Fetcher.get({
                controller: "DevelopMgrController.php",
                method: "get_session_contents",
                params: {},
            }).then((response) => {
                const kvs = []
                for (const c of Object.keys(response)) {
                    kvs.push({
                        key: c,
                        value: response[c],
                    })
                }
                this.session_contents = kvs
            })
        }

    }
</script>

<style lang="scss" scoped>
</style>
