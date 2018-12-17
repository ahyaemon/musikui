/**
 * Drkenからうけとるテキストファイルをテスト用に作成する
 */
export default class MusikuiTemplate {

    public text_plus = `
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

    public text_multiple = `
レベル 3

＜問題＞　　　　　　　＜答え＞

　　　　１１＊　　　　　　　　１１９
　　　×　　＊　　　　　　　×　　９
　　　――――　　　　　　　――――
　　　１＊＊１　　　　　　　１０７１


(コメント)
11月11日です。
`

public text_divide = `
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

    get lines_plus(): string[] {
        return this.to_lines(this.text_plus)
    }

    get lines_multiple(): string[] {
        return this.to_lines(this.text_multiple)
    }

    get lines_divide(): string[] {
        return this.to_lines(this.text_divide)
    }

    private to_lines(s: string): string[] {
        return s.replace(/[\r\n]/g, "\n").split("\n").filter((e) => e !== "")
    }
}
