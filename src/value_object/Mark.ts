import Hissan from "./Hissan"
import { CellType, to_cell_char } from "@/value_object/CellType"

export enum Mark {
    Plus = "plus",
    Multiple = "multiple",
    Divide = "divide",
}

export const from_hissan = (hissan: Hissan): Mark => {
    for (const row of hissan.rows) {
        for (const c of row) {
            if (c.ct === CellType.Plus) {
                return Mark.Plus
            }
            if (c.ct === CellType.Multiple) {
                return Mark.Multiple
            }
            if (c.ct === CellType.Divide) {
                return Mark.Divide
            }
        }
    }
    return Mark.Plus
}
