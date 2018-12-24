import Parser from "@/util/parser"
import MusikuiTemplate from "../../MusikuiTemplate"

describe("Parser.ts", () => {
    const template = new MusikuiTemplate()

    it("gets level from musikui lines", () => {
        expect(Parser.get_level(template.lines_zen_plus)).toBe(10)
    })

    it("gets hissan lines from zen plus musikui lines", () => {
        const res = Parser.get_hissan_lines(template.lines_zen_plus)
        expect(res[0]).toBe("     10         10")
        expect(res.length).toBe(5)
    })

    it("gets hissan lines from han plus hukumen musikui lines", () => {
        const res = Parser.get_hissan_lines(template.lines_han_plus_hukumen)
        expect(res[1]).toBe("+MORE +1085")
        expect(res.length).toBe(4)
    })

    it("gets hissan lines from zen multiple hukumen musikui lines", () => {
        const res = Parser.get_hissan_lines(template.lines_zen_multiple_hukumen)
        expect(res[1]).toBe("*  □□□     *  921")
        expect(res.length).toBe(8)
    })

    it("gets comment lines from musikui lines", () => {
        const res = Parser.get_comment_lines(template.lines_zen_plus)
        expect(res[0]).toBe("11月11日です。")
        expect(res.length).toBe(2)
    })

    it("creates binary string", () => {
        expect(Parser.to_binary("abcde")).toBe("11111")
        expect(Parser.to_binary("ab de")).toBe("11011")
        expect(Parser.to_binary("abcde ")).toBe("111110")
        expect(Parser.to_binary("ab de ")).toBe("110110")
        expect(Parser.to_binary("     １０         １０")).toBe("000001100000000011")
    })

    it("creates boolean array", () => {
        expect(Parser.to_boolean("1")).toEqual([true])
        expect(Parser.to_boolean("0")).toEqual([false])
        expect(Parser.to_boolean("1010")).toEqual([true, false, true, false])
    })

    it("creates new boolean array from two boolean arrays", () => {
        expect(Parser.array_or([true, true, false, false], [true, false, true, false])).toEqual([true, true, true, false])
    })

    it("creates number array of boolean turnung point", () => {
        expect(Parser.get_change_points([false, false, true, true, false, false, true, true, false])).toEqual([2, 4, 6, 8])
        expect(Parser.get_change_points([false, true, false, true, false])).toEqual([1, 2, 3, 4])
    })
})
