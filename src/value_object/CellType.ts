export enum CellType {

    Space = 0,
    Number = 1,
    Plus = 2,
    Multiple = 3,
    Divide = 4,
    Hide = 5,
    Hukumen = 6,
    Bar = 7,

}

export const to_cell_char = (cell_type: CellType): string => {
    switch (cell_type) {
        case CellType.Space:
            return " "
        case CellType.Plus:
            return "+"
        case CellType.Multiple:
            return "*"
        case CellType.Divide:
            return "÷"
        case CellType.Hide:
            return "□"
        case CellType.Bar:
            return "-"
        default:
            return ""
    }
}
