import Cell from "@/value_object/Cell"
import { CellType } from "@/value_object/CellType"
import ValueCell from "@/value_object/ValueCell"

export default class CellFactory {

    public static from_string(c: string): Cell {
        if (c.match(" ")) {
            return new Cell(CellType.Space)
        }
        if (c.match(/\d/)) {
            return new ValueCell(CellType.Number, c)
        }
        if (c.match(/[+]/)) {
            return new Cell(CellType.Plus)
        }
        if (c.match(/[*]/)) {
            return new Cell(CellType.Multiple)
        }
        if (c.match("÷")) {
            return new Cell(CellType.Divide)
        }
        if (c.match("□")) {
            return new Cell(CellType.Hide)
        }
        if (c.match("-")) {
            return new Cell(CellType.Bar)
        }
        return new ValueCell(CellType.Hukumen, c)
    }

}
