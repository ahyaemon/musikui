<template>
    <MCard>
        <MCardTitle>桁数の段差マジック</MCardTitle>
        <MCardBody>
            <p>こんにちは</p>
            <p>ようやく第一回の「虫食算の解き方」の記事となりました。</p>
            <p>ここでは虫食算を解くときの目の付けどころについて、お話していこうと思います。</p>
        </MCardBody>
        <MCardSubtitle>手始めに</MCardSubtitle>
        <MCardBody>
            <p>まず最初は、これ</p>
            <MMusikuiTable :hissan="hissan_question(0).rows" />
            <p>一見手の付けようが無いように感じますが、実は直ちに次のように埋めることができます。</p>
            <p>↓</p>
            <MMusikuiTable :hissan="hissan_answer(0).rows" />
        </MCardBody>
        <MCardSubtitle>孤独のn</MCardSubtitle>
        <MCardBody>
            <p>そして次の問題が、こやつです。</p>
            <MMusikuiTable :hissan="hissan_question(1).rows" />
            <p>□だらけではないか！！と思われたかもしれません。</p>
            <p>この問題は、1925年に E. F. Odling が発表した非常に有名な問題です。</p>
            <p>この問題をきっかけにして虫食算が発展したといっても過言ではないでしょう。</p>
            <p>このように数字が1個しかない虫食算は「孤独のn」 (nは表出された1個の数字) と呼ばれます。</p>
            <p>しかし、「孤独のn」はトリックさえ知っていれば非常に簡単に解けることが多いです。</p>
            <p>上の問題も、今回冒頭で紹介した「桁数の段差マジック」を使えば、ただちに以下のようにすることができます！</p>
            <MMusikuiTable :hissan="hissan_answer(1).rows" />
            <p>はい！！！</p>
            <p>「数字が1個しかない」というのはそう見せていただけです！！！</p>
            <p>本当は元々これだけのヒントをもっている問題なのです。</p>
            <p>まだ□だらけじゃん！」って思うかもしれないですが、</p>
            <p>ここから先は、次回紹介する「桁数フィルター」のテクニックを使えば一瞬で解くことができます！</p>
        </MCardBody>
        <MCardSubtitle>参考</MCardSubtitle>
        <MCardBody>
            <p>最後に、今回のテクニックを使えばすぐに解ける問題 (当サイト過去問) を例示します。</p>
            <p>上の問題と同じジャンル：「孤独の5」です。</p>
            <router-link to="/old-contest/4">20160228の問題 (Question. 5)</router-link>
        </MCardBody>
    </MCard>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"
    import { MMusikuiTable } from "@/components/contest"
    import { Action, Getter } from "vuex-class"
    import Hissan from "@/value_object/Hissan"
    const namespace: string = "general_store/how_store"

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
            MMusikuiTable,
        },
    })
    export default class DansaMagin extends Vue {

        @Getter("hissan_question", { namespace }) private hissan_question!: () => (idx: number) => Hissan
        @Getter("hissan_answer", { namespace }) private hissan_answer!: () => (idx: number) => Hissan
        @Action("fetch_musikuis", { namespace }) private fetch_musikuis!: (ids: number[]) => void

        private mounted() {
            this.fetch_musikuis([430, 431, 432, 433, 434])
        }

}
</script>
