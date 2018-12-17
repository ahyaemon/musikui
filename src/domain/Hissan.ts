import Cell from "./Cell"
import Parser from "@/util/parser"
import CellFactory from "@/domain/factory/CellFactory"

export default class Hissan {

    public static default(): Hissan {
        return new Hissan([])
    }

    public static from_lines(lines: string[]): { question: Hissan, answer: Hissan } {
        const binary_lines = lines.map((line) => Parser.to_binary(line))
        const bools_array = binary_lines.map((line) => Parser.to_boolean(line).concat([false]))
        const bools = bools_array.reduce((prev, current) => Parser.array_or(prev, current))
        const change_points = Parser.get_change_points(bools)
        return {
            question: this.to_hissan(change_points[0], change_points[1], lines),
            answer: this.to_hissan(change_points[2], change_points[3], lines),
        }
    }

    private static to_hissan(beg: number, end: number, lines: string[]): Hissan {
        const rows = lines.map((line) => {
            return line.slice(beg, end).split("").map((c) => {
                return CellFactory.from_string(c)
            })
        })
        return new Hissan(rows)
    }

    constructor(
        readonly rows: Cell[][],
    ) {}

}
