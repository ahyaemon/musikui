import Cell from "./Cell"
import { CellType } from "./CellType"

export default class ValueCell extends Cell {

    constructor(
        readonly ct: CellType,
        readonly v: string,
    ) {
        super(ct)
    }

}
