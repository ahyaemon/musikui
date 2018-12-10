<template>
    <div>
        <h2>虫食い算とは</h2>
        <div class="m-card">
            <div>
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
            </div>

                    <div id="musikui" class="back1 box radius1 martop10">
            <h3 class="color1 back4 radius1">虫食い算</h3>
            <p>
                まずは、このサイトのタイトルにもなっている虫食い算。<br>
                皆さんは、虫食い算を見たことがあるでしょうか？<br>
                見たことがない人も、マスターだという人もいるかと思います。<br>
                虫食い算とは、次のようなものになります。
            </p>
            <!-- Q1 -->
            <hr>
            <MusikuiTable :hissan="hissan_question(0)" />
            <article>
                <section  class="sec-question">
                    <div class="ncol{$musikui1.ncol}">
                        {$musikui1.musikui_q}
                    </div>
                </section>
            </article>
            <!-- Q2 -->
            <hr>
            <MusikuiTable :hissan="hissan_question(1)" />

            <article>
                <section  class="sec-question">
                    <div class="ncol{$musikui2.ncol}">
                        {$musikui2.musikui_q}
                    </div>
                </section>
            </article>
            <!-- Q3 -->
            <hr>
            <MusikuiTable :hissan="hissan_question(2)" />
            <article>
                <section  class="sec-question">
                    <div class="ncol{$musikui3.ncol}">
                        {$musikui3.musikui_q}
                    </div>
                </section>
            </article>
            <hr>
            <p>
                □になっている部分に数字を入れて、筆算を完成させましょう！<br>
                答えは過去問のどこかにあります。<br>
                どうでしょうか、簡単だったでしょうか？それとも難しかったでしょうか。<br>
                本サイトには、一瞬で答えのわかる簡単なものから、何日も悩むような難しいものまで、様々な問題を掲載していますので、幅広く楽しんでいただければと思います。<br>
            </p>
        </div>

        <div id="hukumen" class="back1 box radius1 martop10">
            <h3 class="color1 back4 radius1">覆面算</h3>
            <p>虫食い算と並んで紹介されるパズルに覆面算があります。</p>
            <!-- Q4 -->
            <hr>
            <MusikuiTable :hissan="hissan_question(3)" />
            <article>
                <section  class="sec-question">
                    <div class="ncol{$musikui4.ncol}">
                        {$musikui4.musikui_q}
                    </div>
                </section>
            </article>
            <hr>
            <p>
                同じ文字には同じ数字が入り、異なる文字には異なる数字が入ります。<br>
                この問題は、H. E. Dudeney が 1924 年に発表した作品で、「意味のある単語を使用した歴史上最初の覆面算」として有名です。<br>
                「もっと金送れ」の謎を解いてみましょう。<br>
                答えは次のようになります。
            </p>
            <!-- A4 -->
            <hr>
            <MusikuiTable :hissan="hissan_answer(3)" />
            <article>
                <section  class="sec-question">
                    <div class="ncol{$musikui4.ncol}">
                        {$musikui4.musikui_a}
                    </div>
                </section>
            </article>
            <hr>
            <p>
                少し難しかったかもしれませんね。<br>
                覆面算にはこのようにメッセージをもたせた楽しい作品が沢山あります。<br>
            </p>
        </div>

        <div id="musimen" class="back1 box radius1 martop10">
            <h3 class="color1 back4 radius1">虫食い算と覆面算の混合</h3>
            <p>虫食い算と覆面算を混ぜ合わせた作品もあります (『虫食算パズル 700 選』の問 624)。</p>
            <!-- Q5 -->
            <hr>
            <MusikuiTable :hissan="hissan_question(4)" />
            <article>
                <section  class="sec-question">
                    <div class="ncol{$musikui5.ncol}">
                        {$musikui5.musikui_q}
                    </div>
                </section>
            </article>
            <hr>

            <p>
                文字と数字の両方が登場した作品です。<br>
                このような作品では、「は」と「る」と「月」にはそれぞれ異なる数字が入りますが、それ以外の□については、「は」「る」「月」と同じ数字が入ってもよいです。<br>
                答えは次のようになります！
            </p>
            <!-- A5 -->
            <hr>
            <MusikuiTable :hissan="hissan_answer(4)" />
            <article>
                <section  class="sec-question">
                    <div class="ncol{$musikui5.ncol}">
                        {$musikui5.musikui_a}
                    </div>
                </section>
            </article>
            <hr>
            <p>
                このように文字や数字を組み合わせることで、様々な作品を作ることができます。<br>
                本サイトでは、「純粋な虫食い算」「覆面算」「虫食い算と覆面算の混合」をまとめて虫食い算とよんでいます。<br>
                虫食い算の種類としてどのようなものがあるかについて、随時紹介していきたいと思います。<br>
                是非様々な問題を楽しんでください！
            </p>
        </div>

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import MMusikuiTable from "@/components/contest/MMusikuiTable.vue"
    import { Action, Getter } from "vuex-class"
    const namespace: string = "what"

    @Component({
        components: {
            MMusikuiTable,
        },
    })
    export default class WhatPage extends Vue {
        // @Getter('hissan_question', { namespace }) hissan_question: (number) => Array<Array<Cell>>
        // @Getter('hissan_question', { namespace }) hissan_answer: (number) => Array<Array<Cell>>
        // @Action('fetch_musikuis', { namespace }) fetch_musikuis: any

        // created() {
        //     this.fetch_musikuis([430, 431, 432, 433, 434])
        // }

        // _hissan_question(index) {
        //     console.log(this.hissan_question(index))
        //     return this.hissan_question(index)
        // }
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