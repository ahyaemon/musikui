<template>
    <div>
        <h2>虫食い算の解き方</h2>
        <MCard>
            <div>
                <p>Dr.Kenによる世界一分かり易く為になる解説</p>
                <p>難しい虫食い算も解けるようになっちゃう！？</p>
            </div>
            <div style="margin-top:20px">
                <div v-for="(link, ilink) in links" :key="ilink">
                    <router-link :to="link.url">{{ link.title }}</router-link>
                </div>
            </div>
        </MCard>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import MCard from "@/components/MCard.vue"

    @Component({
        components: {
            MCard,
        },
    })
    export default class HowView extends Vue {

        private links: any[] = [
            { url: "/how/what-is-musikuizan", title: "第0回 虫食い算とは" },
            { url: "/how/dansa-magic", title: "第1回 桁数の段差マジック" },
        ]

    }
</script>
