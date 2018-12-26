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

            <MCardSubtitle>store操作</MCardSubtitle>
            <MCardBody>
                <MPinkButton @click.native="is_admin_false_clicked">is_adminをfalseにする</MPinkButton>
            </MCardBody>

            <MCardSubtitle>暗号化の確認</MCardSubtitle>
            <MCardBody>
                <div>
                    <span>原文</span>
                    <input type="text" v-model="origin_text"/>
                </div>
                <div>
                    <MPinkButton @click.native="crypt_clicked">暗号化</MPinkButton>
                </div>
                <div>
                    <span>結果</span>
                    <input type="text" v-model="crypted_text" readonly/>
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
    import { Getter, Action, Mutation } from "vuex-class"
    const namespace = "mgr_store/auth_store"

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
        @Mutation("set_is_admin", { namespace }) private set_is_admin!: (is_admin: boolean) => void
        @Action("crypt", { namespace }) private crypt!: () => void

        private session_destroyed: boolean = false
        private session_contents: SessionContent[] = []
        private origin_text: string = ""
        private crypted_text: string = ""

        private destroy_session() {
            Fetcher.post({
                controller: "DevelopMgrController",
                method: "destroy_session",
                params: {},
            }).then((response) => {
                    this.session_destroyed = true
                    this.session_contents = []
            })
        }

        private show_session() {
            Fetcher.get({
                controller: "DevelopMgrController",
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

        private is_admin_false_clicked() {
            this.set_is_admin(false)
        }

        private crypt_clicked() {
            Fetcher.get({
                controller: "DevelopMgrController",
                method: "get_crypted_text",
                params: {
                    origin_text: this.origin_text,
                },
            }).then((response) => {
                this.crypted_text = response
            })
        }

    }
</script>

<style lang="scss" scoped>
    input {
        width: 800px;
    }
</style>
