import Musikui from "@/domain/Musikui"
import { CellType } from "@/value_object/CellType"
import MusikuiTemplate from "../../MusikuiTemplate"

describe("Musikui.ts", () => {

    const template = new MusikuiTemplate()

    it("parse plus mark musikui text", () => {
        const m = Musikui.from_text(template.text_plus)

        expect(m.level).toBe(10)

        expect(m.hissan_question.rows[1][3].ct).toBe(CellType.Hide)
        expect(m.hissan_question.rows[1][0].ct).toBe(CellType.Plus)

        expect(m.hissan_answer.rows[1][3].ct).toBe(CellType.Number)
        expect(m.hissan_answer.rows[1][0].ct).toBe(CellType.Plus)

        expect(m.mark).toBe("plus")
        expect(m.comment).toBe("11月11日です。<br>ついかぎょう")
        expect(m.nrow).toBe(5)
        expect(m.ncol).toBe(4)

        expect(m.formula.lefts).toEqual([10, 999, 100])
        expect(m.formula.right).toBe(1009)
    })

    it("parse multiple mark musikui text", () => {
        const m = Musikui.from_text(template.text_multiple)

        expect(m.level).toBe(3)

        expect(m.hissan_question.rows[0][3].ct).toBe(CellType.Hide)
        expect(m.hissan_question.rows[1][0].ct).toBe(CellType.Multiple)

        expect(m.hissan_answer.rows[0][3].ct).toBe(CellType.Number)
        expect(m.hissan_answer.rows[1][0].ct).toBe(CellType.Multiple)

        expect(m.mark).toBe("multiple")
        expect(m.comment).toBe("11月11日です。")
        expect(m.nrow).toBe(4)
        expect(m.ncol).toBe(4)

        expect(m.formula.lefts).toEqual([119, 9])
        expect(m.formula.right).toBe(1071)
    })

    it("parse divide mark musikui text", () => {
        const m = Musikui.from_text(template.text_divide)

        expect(m.level).toBe(10)

        expect(m.hissan_question.rows[2][0].ct).toBe(CellType.Hide)
        expect(m.hissan_question.rows[2][6].ct).toBe(CellType.Divide)

        expect(m.hissan_answer.rows[2][0].ct).toBe(CellType.Number)
        expect(m.hissan_answer.rows[2][6].ct).toBe(CellType.Divide)

        expect(m.mark).toBe("divide")
        expect(m.comment).toBe("「キ」です。")
        expect(m.nrow).toBe(15)
        expect(m.ncol).toBe(18)

        expect(m.formula.lefts).toEqual([16046714453, 842303])
        expect(m.formula.right).toBe(19051)
    })

})
