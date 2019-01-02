import Contest from "@/domain/Contest"
import Respondent from "@/domain/Respondent"

describe("Contest.ts", () => {

    it("create clone with new respondent when same musikui id exists", () => {
        const old_contest = Contest.default()
        const new_respondent = new Respondent(1, "NEWMAN", "I AM NEWMAN", "20190101")
        const new_contest = Contest.clone_with_new_respondents(old_contest, 0, [new_respondent])
        expect(new_contest.musikuis[0].respondents[0].name).toBe("NEWMAN")
    })

    it("create clone with new respondent when same musikui id not exists", () => {
        const old_contest = Contest.default()
        const new_respondent = new Respondent(1, "NEWMAN", "I AM NEWMAN", "20190101")
        const new_contest = Contest.clone_with_new_respondents(old_contest, 1, [new_respondent])
        expect(new_contest.musikuis[0].respondents[0].name).toBe("gonbey")
    })

})
