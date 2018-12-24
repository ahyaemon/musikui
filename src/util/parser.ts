import { CellType, to_cell_char } from "@/value_object/CellType"

export default class Parser {

    /**
     * 虫食いlinesからレベルを取得する
     * @param lines
     */
    public static get_level(lines: string[]): number {
        for (const line of lines) {
            if (line === "") {
                continue
            }
            if (line.match(/レベル/)) {
                const level = line.replace("　", " ").split(" ")[1]
                return parseInt(level, 10)
            }
        }
        return 0
    }

    /**
     * [問題 / 回答] 部分の行を取得する
     * ハイフンが歩かないかによって、全角かどうかを判断する
     * @param lines
     */
    public static get_hissan_lines(lines: string[]): string[] {
        const is_half_mode = lines // TODO
        let rec = false
        const hissan_lines = []
        for (const line of lines) {
            if (line === "") {
                continue
            }
            if (line.match(/＜問題＞/)) {
                rec = true
                continue
            }
            if (line.match(/(コメント)/)) {
                return hissan_lines
            }
            if (rec) {
                const line_fixed = this.fix_hissan_line(line)
                hissan_lines.push(line_fixed)
                continue
            }
        }
        return []
    }

    /**
     * コメント部分の行を取得する
     */
    public static get_comment_lines(lines: string[]): string[] {
        let rec = false
        const comment_lines = []
        for (const line of lines) {
            if (line === "") {
                continue
            }
            if (line.match(/(コメント)/)) {
                rec = true
                continue
            }
            if (rec) {
                comment_lines.push(line)
            }
        }
        return comment_lines
    }

    /**
     * スペースを 0 , それ以外を 1 に置き換えて返す
     * @param s 任意の文字列
     */
    public static to_binary(s: string): string {
        return s.replace(/[^ ]/g, "1").replace(/[ ]/g, "0")
    }

    /**
     * 1 を true, それ以外を false に置き換えた配列を返す
     * @param s 任意の文字列
     */
    public static to_boolean(s: string): boolean[] {
        return s.split("").map((ss) => {
            return ss === "1"
        })
    }

    /**
     * 2つのboolean配列の各要素に or 演算を施した配列を返す
     * @param ar1
     * @param ar2
     */
    public static array_or(ar1: boolean[], ar2: boolean[]): boolean[] {
        return ar1.map((bool, idx) => {
            return bool || ar2[idx]
        })
    }

    /**
     * boolean が 切り替わるインデックスを返す
     * @param ar
     */
    public static get_change_points(ar: boolean[]): number[] {
        return ar.map((bool, index) => {
            // 最初の要素
            if (index === 0) {
                return 0
            }
            if (bool === ar[index - 1]) {
                return 0
            }
            return index
        }).filter((elem) => {
            return elem !== 0
        })
    }

    /**
     * hissanでパースできる文字列に直す
     * @param line
     */
    private static fix_hissan_line(line: string): string {
        return line
                .replace(/　/g, to_cell_char(CellType.Space))
                .replace(/＊/g, to_cell_char(CellType.Hide))
                .replace(/\*/g, to_cell_char(CellType.Hide)) // 掛け算記号が使われている場合、先にHideにする
                .replace(/＋/g, to_cell_char(CellType.Plus))
                .replace(/×/g, to_cell_char(CellType.Multiple))
                .replace(/―/g, to_cell_char(CellType.Bar))
                .replace(/\//g, to_cell_char(CellType.Divide))
                .replace(/ノ/g, to_cell_char(CellType.Divide))
                .replace(/０/g, "0")
                .replace(/１/g, "1")
                .replace(/２/g, "2")
                .replace(/３/g, "3")
                .replace(/４/g, "4")
                .replace(/５/g, "5")
                .replace(/６/g, "6")
                .replace(/７/g, "7")
                .replace(/８/g, "8")
                .replace(/９/g, "9")
                .replace(/[\r\n]/g, "")
    }

}
