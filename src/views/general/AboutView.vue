<template>
    <div>
        <MCard>
            <MCardTitle>このページについて</MCardTitle>
            <MCardBody>
                <p>あひゃえもん & Dr.Kenによる虫食い算サイト。</p>
                <p>基本的にあひゃえもんがサイトを構築しており、Dr.Kenはブレインとして虫食い算を作成している。</p>
            </MCardBody>
            <MCardSubtitle>あひゃえもん</MCardSubtitle>
            <MCardBody>
                <p>
                    <b>メール</b><br>
                    musikui4u[@]gmail.com
                </p>
                <p>
                    <b>あひゃえもんの公式サイト</b><br>
                    <a href="http://ahyaemon.matrix.jp/" target="blank">あひゃえもんのページ</a>
                </p>
            </MCardBody>
            <MCardSubtitle>Dr.Ken</MCardSubtitle>
            <MCardBody>
                ahyahyahyahyahyae
            </MCardBody>
        </MCard>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
        },
    })
    export default class AboutPage extends Vue {
    }
</script>
