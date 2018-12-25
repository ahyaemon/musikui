<template>
    <MCard>
        <MCardTitle>虫食い算とは</MCardTitle>
        <MCardBody>
            <p>
                虫食い算は、神から承った人類の英知・・・<br>
                そんな虫食い算のルールはこちら！！
            </p>
            <ol class="ol">
                <li>1. □や文字には、0 から 9 までの数字のいずれかが入る<br>(ただし左端の□や文字には 0 は入らない)</li>
                <li>2. 同じ文字には同じ数字が入る</li>
                <li>3. 異なる文字には異なる数字が入る</li>
                <li>4. □と文字とで同じ数字が入ってもよい</li>
            </ol>
            <p>
                3 の条件から、虫食い算には 11 種類以上の文字は登場しないことがわかります。<br>
                また、例えば文字 A に 3 が入ることがわかったとき、その他の文字 (B など) には 3 は入らないですが、□には 3 が入ってもよいです。
            </p>
            <p>
                このサイトでは、次の3種類の問題を出題します。
            </p>
            <ul class="b u">
                <li><a href="#musikui" class="acolor2">虫食い算 <i class="fas fa-arrow-circle-right"></i></a></li>
                <li><a href="#hukumen" class="acolor2">覆面算 <i class="fas fa-arrow-circle-right"></i></a></li>
                <li><a href="#musimen" class="acolor2">虫食い算と覆面算の混合 <i class="fas fa-arrow-circle-right"></i></a></li>
            </ul>
        </MCardBody>

        <MCardSubtitle>虫食い算</MCardSubtitle>
        <MCardBody>
            <p>
                まずは、このサイトのタイトルにもなっている虫食い算。<br>
                皆さんは、虫食い算を見たことがあるでしょうか？<br>
                見たことがない人も、マスターだという人もいるかと思います。<br>
                虫食い算とは、次のようなものになります。
            </p>
            <!-- Q1 -->
            <hr>
            <MMusikuiTable :hissan="hissan_question(0).rows" />
            <!-- Q2 -->
            <hr>
            <MMusikuiTable :hissan="hissan_question(1).rows" />
            <!-- Q3 -->
            <hr>
            <MMusikuiTable :hissan="hissan_question(2).rows" />
            <hr>
            <p>
                □になっている部分に数字を入れて、筆算を完成させましょう！<br>
                答えは過去問のどこかにあります。<br>
                どうでしょうか、簡単だったでしょうか？それとも難しかったでしょうか。<br>
                本サイトには、一瞬で答えのわかる簡単なものから、何日も悩むような難しいものまで、様々な問題を掲載していますので、幅広く楽しんでいただければと思います。<br>
            </p>
        </MCardBody>

        <MCardSubtitle>覆面算</MCardSubtitle>
        <MCardBody>
            <p>虫食い算と並んで紹介されるパズルに覆面算があります。</p>
            <!-- Q4 -->
            <hr>
            <MMusikuiTable :hissan="hissan_question(3).rows" />
            <hr>
            <p>
                同じ文字には同じ数字が入り、異なる文字には異なる数字が入ります。<br>
                この問題は、H. E. Dudeney が 1924 年に発表した作品で、「意味のある単語を使用した歴史上最初の覆面算」として有名です。<br>
                「もっと金送れ」の謎を解いてみましょう。<br>
                答えは次のようになります。
            </p>
            <!-- A4 -->
            <hr>
            <MMusikuiTable :hissan="hissan_answer(3).rows" />
            <hr>
            <p>
                少し難しかったかもしれませんね。<br>
                覆面算にはこのようにメッセージをもたせた楽しい作品が沢山あります。<br>
            </p>
        </MCardBody>

        <MCardSubtitle>虫食い算と覆面算の混合</MCardSubtitle>
        <MCardBody>
            <p>虫食い算と覆面算を混ぜ合わせた作品もあります (『虫食算パズル 700 選』の問 624)。</p>
            <!-- Q5 -->
            <hr>
            <MMusikuiTable :hissan="hissan_question(4).rows" />
            <hr>

            <p>
                文字と数字の両方が登場した作品です。<br>
                このような作品では、「は」と「る」と「月」にはそれぞれ異なる数字が入りますが、それ以外の□については、「は」「る」「月」と同じ数字が入ってもよいです。<br>
                答えは次のようになります！
            </p>
            <!-- A5 -->
            <hr>
            <MMusikuiTable :hissan="hissan_answer(4).rows" />
            <hr>
            <p>
                このように文字や数字を組み合わせることで、様々な作品を作ることができます。<br>
                本サイトでは、「純粋な虫食い算」「覆面算」「虫食い算と覆面算の混合」をまとめて虫食い算とよんでいます。<br>
                虫食い算の種類としてどのようなものがあるかについて、随時紹介していきたいと思います。<br>
                是非様々な問題を楽しんでください！
            </p>
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
    export default class WhatView extends Vue {
        @Getter("hissan_question", { namespace }) private hissan_question!: () => (idx: number) => Hissan
        @Getter("hissan_answer", { namespace }) private hissan_answer!: () => (idx: number) => Hissan
        @Action("fetch_musikuis", { namespace }) private fetch_musikuis!: (ids: number[]) => void

        private mounted() {
            this.fetch_musikuis([430, 431, 432, 433, 434])
        }

    }
</script>

<style lang="scss" scoped>
    .ol {
        li {
            margin-left: 20px;
            font-weight: bold;
        }
    }
</style>