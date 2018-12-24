import Hissan from "@/value_object/Hissan"
import { CellType } from "@/value_object/CellType"
import ValueCell from "@/value_object/ValueCell"

describe("hissan.ts", () => {
    it("can parse plus", () => {
        const lines: string[] = []
        lines.push("     10         10")
        lines.push("   +99□       +999")
        lines.push("   +10□       +100")
        lines.push("   ----       ----")
        lines.push("   1□□9       1009")
        const hissan = Hissan.from_lines(lines)
        const question = hissan.question

        expect(question.rows.length).toBe(5)
        expect(question.rows[0].length).toBe(4)
        expect(question.rows[0][0].ct).toBe(CellType.Space)
        expect(question.rows[1][3].ct).toBe(CellType.Hide)
        expect(question.rows[1][0].ct).toBe(CellType.Plus)
        expect(question.rows[2][0].ct).toBe(CellType.Plus)
        expect(question.rows[3][0].ct).toBe(CellType.Bar)
        const c_question = question.rows[4][0] as ValueCell
        expect(c_question.v).toBe("1")

        const answer = hissan.answer
        expect(answer.rows.length).toBe(5)
        expect(answer.rows[0].length).toBe(4)
        expect(answer.rows[0][0].ct).toBe(CellType.Space)
        expect(answer.rows[1][3].ct).toBe(CellType.Number)
        expect(answer.rows[1][0].ct).toBe(CellType.Plus)
        expect(answer.rows[2][0].ct).toBe(CellType.Plus)
        expect(answer.rows[3][0].ct).toBe(CellType.Bar)
        const c_answer = answer.rows[4][0] as ValueCell
        expect(c_answer.v).toBe("1")
    })

    it("can parse plus hukumen", () => {
        const lines: string[] = []
        lines.push(" SEND  9567")
        lines.push("+MORE +1085")
        lines.push("----- -----")
        lines.push("MONEY 10652")
        const hissan = Hissan.from_lines(lines)
        const question = hissan.question

        expect(question.rows.length).toBe(4)
        expect(question.rows[0].length).toBe(5)
        expect(question.rows[0][0].ct).toBe(CellType.Space)
        expect(question.rows[1][1].ct).toBe(CellType.Hukumen)
        const h_question = question.rows[1][1] as ValueCell
        expect(h_question.v).toBe("M")
        expect(question.rows[1][0].ct).toBe(CellType.Plus)
        expect(question.rows[2][0].ct).toBe(CellType.Bar)

        const answer = hissan.answer
        expect(answer.rows.length).toBe(4)
        expect(answer.rows[0].length).toBe(5)
        expect(answer.rows[0][0].ct).toBe(CellType.Space)
        expect(answer.rows[1][0].ct).toBe(CellType.Plus)
        expect(answer.rows[2][0].ct).toBe(CellType.Bar)
        const c_answer = answer.rows[1][1] as ValueCell
        expect(c_answer.v).toBe("1")
    })

    it("can parse multiple", () => {
        const lines: string[] = []
        lines.push("    11□        119")
        lines.push("   *  □       *  9")
        lines.push("   ----       ----")
        lines.push("   1□□1       1071")
        const hissan = Hissan.from_lines(lines)
        const question = hissan.question
        const answer = hissan.answer

        expect(question.rows.length).toBe(4)
        expect(question.rows[0].length).toBe(4)
        expect(question.rows[0][0].ct).toBe(CellType.Space)
        expect(question.rows[0][3].ct).toBe(CellType.Hide)
        expect(question.rows[1][0].ct).toBe(CellType.Multiple)
        expect(question.rows[2][0].ct).toBe(CellType.Bar)
        const c_question = question.rows[3][0] as ValueCell

        expect(c_question.v).toBe("1")
        expect(answer.rows.length).toBe(4)
        expect(answer.rows[0].length).toBe(4)
        expect(answer.rows[0][0].ct).toBe(CellType.Space)
        expect(answer.rows[0][3].ct).toBe(CellType.Number)
        expect(answer.rows[1][0].ct).toBe(CellType.Multiple)
        expect(answer.rows[2][0].ct).toBe(CellType.Bar)
        const c_answer = answer.rows[3][0] as ValueCell
        expect(c_answer.v).toBe("1")

    })

    it("can parse divide", () => {
        const lines: string[] = []
        lines.push("     7□        74")
        lines.push("   ----      ----")
        lines.push(" 3÷ 2□2    3÷ 222")
        lines.push("    21        21 ")
        lines.push("    ---       ---")
        lines.push("     12        12")
        lines.push("     12        12")
        lines.push("     --        --")
        lines.push("      0         0")
        const hissan = Hissan.from_lines(lines)
        const question = hissan.question
        const answer = hissan.answer

        expect(question.rows.length).toBe(9)
        expect(question.rows[0].length).toBe(6)
        expect(question.rows[0][0].ct).toBe(CellType.Space)
        expect(question.rows[0][5].ct).toBe(CellType.Hide)
        const c_question = question.rows[0][4] as ValueCell
        expect(c_question.ct).toBe(CellType.Number)
        expect(c_question.v).toBe("7")
        expect(question.rows[1][2].ct).toBe(CellType.Bar)
        expect(question.rows[2][1].ct).toBe(CellType.Divide)

        expect(answer.rows.length).toBe(9)
        expect(answer.rows[0].length).toBe(6)
        expect(answer.rows[0][0].ct).toBe(CellType.Space)
        expect(answer.rows[0][5].ct).toBe(CellType.Number)
        const c_answer = answer.rows[0][4] as ValueCell
        expect(c_answer.ct).toBe(CellType.Number)
        expect(c_answer.v).toBe("7")
        expect(answer.rows[1][2].ct).toBe(CellType.Bar)
        expect(answer.rows[2][1].ct).toBe(CellType.Divide)
    })
})
