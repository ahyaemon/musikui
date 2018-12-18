import Hissan from "./Hissan"
import { Mark } from "@/domain/Mark"
import Cell from "@/domain/Cell"
import { CellType } from "@/domain/CellType"
import ValueCell from "@/domain/ValueCell"

export default class Formula {

    public static default(): Formula {
        return new Formula([0, 0], 0)
    }

    public static from_hissan(hissan: Hissan, mark: Mark): Formula {
        const rows = hissan.rows
        if (mark === Mark.Plus) {
            // 0 ~ n - 2 までがlefts
            // n - 1 がright
            const lefts = rows.slice(0, rows.length - 2).map((row) => Formula.form_row_to_num(row))
            const right = Formula.form_row_to_num(rows[rows.length - 1])
            return new Formula(lefts, right)
        }

        if (mark === Mark.Multiple) {
            // 0, 1 がlefts
            // n - 1 がright
            const lefts = rows.slice(0, 2).map((row) => Formula.form_row_to_num(row))
            const right = Formula.form_row_to_num(rows[rows.length - 1])
            return new Formula(lefts, right)
        }
        if (mark === Mark.Divide) {
            // 0 がright
            // 1 を÷でsplitし、左右を入れ替えるとlefts
            const lefts_cells = rows[2]
            const cell_divide = lefts_cells.find((cell) => cell.ct === CellType.Divide)!
            const pos_divide = lefts_cells.indexOf(cell_divide)
            const left1 = Formula.form_row_to_num(lefts_cells.slice(0, pos_divide))
            const left2 = Formula.form_row_to_num(lefts_cells.slice(pos_divide, lefts_cells.length))
            const right = Formula.form_row_to_num(rows[0])
            return new Formula([left2, left1], right)
        }
        return Formula.default()
    }

    private static form_row_to_num(row: Cell[]): number {
        const joinned = row
                .filter((cell) => cell.ct === CellType.Number)
                .map((cell) => (cell as ValueCell).v )
                .join("")
        return parseInt(joinned, 10)
    }

    constructor(
        readonly lefts: number[],
        readonly right: number,
    ) {}

}
