import MusikuiDate from "@/value_object/MusikuiDate"

describe("MusikuiDate.ts", () => {

    it("output formatted string", () => {
        const musikui_date = new MusikuiDate("2018/04/01")
        expect(musikui_date.format()).toBe("2018/04/01")
    })

    it("add date", () => {
        const musikui_date = new MusikuiDate("2018/04/01")
        musikui_date.add_date(1)
        expect(musikui_date.format()).toBe("2018/04/02")
    })

    it("add month when date over limit", () => {
        const musikui_date = new MusikuiDate("2018/04/30")
        musikui_date.add_date(1)
        expect(musikui_date.format()).toBe("2018/05/01")
    })

    it("return next sunday when sunday", () => {
        const musikui_date = new MusikuiDate("2018/04/01") // 日曜日
        const sunday = musikui_date.next_sunday()
        expect(sunday.format()).toBe("2018/04/08")
    })

    it("return next sunday when monday", () => {
        const musikui_date = new MusikuiDate("2018/04/02") // 月曜日
        const sunday = musikui_date.next_sunday()
        expect(sunday.format()).toBe("2018/04/08")
    })

})
