<template>
    <div>
        <h2>桁数の段差マジック</h2>
        <div class="m-card">
            <div class="box back1 radius1">
                <p>
                    こんにちは<br>
                    ようやく第一回の「虫食算の解き方」の記事となりました。<br>
                    ここでは虫食算を解くときの目の付けどころについて、お話していこうと思います。
                </p>
            </div>
            <div class="box back1 radius1 martop10">
                <p>
                    まず最初は、これ
                </p>
                <!-- Q1 -->
                <article><section  class="sec-question"><div class="ncol{$musikui1.ncol}">{$musikui1.musikui_q}</div></section></article>
                <p>
                    一見手の付けようが無いように感じますが、実は直ちに次のように埋めることができます。<br>
                    ↓
                </p>
                <!-- A1 -->
                <article><section  class="sec-question"><div class="ncol{$musikui1.ncol}">{$musikui1.musikui_a}</div></section></article>
            </div>
            <div class="box back1 radius1 martop10">
                <p>
                そして次の問題が、こやつです。
                </p>
                <!-- Q2 -->
                <article><section  class="sec-question"><div class="ncol{$musikui2.ncol}">{$musikui2.musikui_q}</div></section></article>
                <p>
                    □だらけではないか！！と思われたかもしれません。
                </p>
                <p>
                    この問題は、1925年に E. F. Odling が発表した非常に有名な問題です。<br>
                    この問題をきっかけにして虫食算が発展したといっても過言ではないでしょう。<br>
                    このように数字が1個しかない虫食算は「孤独のn」 (nは表出された1個の数字) と呼ばれます。<br>
                </p>
                <p>
                    しかし、「孤独のn」はトリックさえ知っていれば非常に簡単に解けることが多いです。<br>
                    上の問題も、今回冒頭で紹介した「桁数の段差マジック」を使えば、ただちに以下のようにすることができます！
                </p>
                <!-- A2 -->
                <article><section  class="sec-question"><div class="ncol{$musikui2.ncol}">{$musikui2.musikui_a}</div></section></article>
                <p>
                    はい！！！<br>
                    「数字が1個しかない」というのはそう見せていただけです！！！<br>
                    本当は元々これだけのヒントをもっている問題なのです。
                </p>
                <p>
                    「まだ□だらけじゃん！」って思うかもしれないですが、<br>
                    ここから先は、次回紹介する「桁数フィルター」のテクニックを使えば一瞬で解くことができます！
                </p>
            </div>
            <div class="box back1 radius1 martop10">
                <p>
                    最後に、今回のテクニックを使えばすぐに解ける問題 (当サイト過去問) を例示します。<br>
                    上の問題と同じジャンル：「孤独の5」です。<br>
                    <a href="/old_question.php?date=20160228#q5" class="acolor2 b">20160228の問題 (Question. 5) <i class="fas fa-arrow-circle-right"></i></a>
                </p>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"

    @Component
    export default class DansaMagin extends Vue {
    }
</script>
