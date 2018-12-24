/**
 * Drkenからうけとるテキストファイルをテスト用に作成する
 */
export default class MusikuiTemplate {

    /**
     * 全角足し算
     */
    public text_zen_plus = `
レベル 10

＜問題＞　　　　　　　＜答え＞

　　　　　１０　　　　　　　　　１０
　　　＋９９＊　　　　　　　＋９９９
　　　＋１０＊　　　　　　　＋１００
　　　――――　　　　　　　――――
　　　１＊＊９　　　　　　　１００９


(コメント)
11月11日です。
ついかぎょう
`
    get lines_zen_plus(): string[] {
        return this.to_lines(this.text_zen_plus)
    }

    /**
     * 半角足し算/覆面
     */

    public text_han_plus_hukumen = `
レベル 1

＜問題＞　　　　　　　　＜答え＞

 SEND  9567
+MORE +1085
----- -----
MONEY 10652

(コメント)
what04
`
    get lines_han_plus_hukumen(): string[] {
        return this.to_lines(this.text_han_plus_hukumen)
    }

    /**
     * 全角掛け算
     */
    public text_zen_multiple = `
レベル 3

＜問題＞　　　　　　　＜答え＞

　　　　１１＊　　　　　　　　１１９
　　　×　　＊　　　　　　　×　　９
　　　――――　　　　　　　――――
　　　１＊＊１　　　　　　　１０７１


(コメント)
11月11日です。
`
    get lines_zen_multiple(): string[] {
        return this.to_lines(this.text_zen_multiple)
    }

    /**
     * 全角掛け算/覆面
     */
    public text_zen_multiple_hukumen = `
レベル 1

＜問題＞　　　　　　　　＜答え＞

　　　はる＊　　　　　　　　３７４
×　　＊＊＊　　　　　×　　９２１
――――――　　　　　――――――
　　　＊＊＊　　　　　　　　３７４
　　＊＊＊　　　　　　　　７４８　
＊＊＊＊　　　　　　　３３６６　　
――――――　　　　　――――――
３月４月５月　　　　　３４４４５４


(コメント)
what05
`
    get lines_zen_multiple_hukumen(): string[] {
        return this.to_lines(this.text_zen_multiple_hukumen)
    }

    /**
     * 全角割り算
     */
    public text_zen_divide = `
レベル 10

＜問題＞　　　　　　　　　　　　　　　　　　　　　＜答え＞

　　　　　　　　　　　　　　　　＊＊＊＊＊　　　　　　　　　　　　　　　　　　　　１９０５１
　　　　　　　　　　―――――――――――　　　　　　　　　　　　　　―――――――――――
　　　＊＊＊＊＊＊ノ＊＊＊＊＊＊＊＊＊＊＊　　　　　　　８４２３０３ノ１６０４６７１４４５３
　　　　　　　　　　　＊＊＊＊＊３　　　　　　　　　　　　　　　　　　　８４２３０３　　　　
　　　　　　　　　　　―――――――　　　　　　　　　　　　　　　　　　―――――――　　　
　　　　　　　　　　　＊＊＊＊６８４　　　　　　　　　　　　　　　　　　７６２３６８４　　　
　　　　　　　　　　　＊＊＊＊＊２＊　　　　　　　　　　　　　　　　　　７５８０７２７　　　
　　　　　　　　　　　―――――――――　　　　　　　　　　　　　　　　―――――――――　
　　　　　　　　　　　　　＊＊９５７＊＊　　　　　　　　　　　　　　　　　　４２９５７４５　
　　　　　　　　　　　　　＊＊＊１＊＊＊　　　　　　　　　　　　　　　　　　４２１１５１５　
　　　　　　　　　　　　　――――――――　　　　　　　　　　　　　　　　　――――――――
　　　　　　　　　　　　　　　＊＊＊＊＊＊　　　　　　　　　　　　　　　　　　　８４２３０３
　　　　　　　　　　　　　　　＊＊＊＊＊＊　　　　　　　　　　　　　　　　　　　８４２３０３
　　　　　　　　　　　　　　　――――――　　　　　　　　　　　　　　　　　　　――――――
　　　　　　　　　　　　　　　　　　　　０　　　　　　　　　　　　　　　　　　　　　　　　０


(コメント)
「キ」です。
`

    get lines_zen_divide(): string[] {
        return this.to_lines(this.text_zen_divide)
    }

    private to_lines(s: string): string[] {
        return s.replace(/[\r\n]/g, "\n").split("\n").filter((e) => e !== "")
    }
}
