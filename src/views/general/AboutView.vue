<template>
    <div>
        <MCard>
            <h2>このページについて</h2>
            <div class="m-card">
                <p>あひゃえもん & Dr.Kenによる虫食い算サイト。</p>
                <p>基本的にあひゃえもんがサイトを構築しており、Dr.Kenはブレインとして虫食い算を作成している。</p>
                <p>
                    <b>メール</b><br>
                    musikui4u[@]gmail.com
                </p>
                <p>
                    <b>あひゃえもんの公式サイト</b><br>
                    <a href="http://ahyaemon.matrix.jp/" target="blank">あひゃえもんのページ</a>
                </p>
            </div>
        </MCard>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import Component from "vue-class-component"
    import MCard from "@/components/MCard.vue"

    @Component({
        components: {
            MCard,
        },
    })
    export default class AboutPage extends Vue {
    }
</script>
