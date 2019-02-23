import Musikui from "./Musikui"
import MusikuiDate from "../value_object/MusikuiDate"
import Respondent from "@/domain/Respondent"

export default class Contest {

    public static default() {
        return new Contest(
            0,
            MusikuiDate.from_string("2000/01/01"),
            "default contest comment",
            [Musikui.default()],
        )
    }

    /**
     * 特定の虫食い算に対する回答者を更新し、新しいコンテストとして返す
     *
     * @param old
     * @param musikui_id
     * @param respondents
     */
    public static clone_with_new_respondents(old: Contest, musikui_id: number, respondents: Respondent[]): Contest {
        const new_musikuis = old.musikuis.map((musikui) => {
            if (musikui.id === musikui_id) {
                return Musikui.clone_with_new_respondents(musikui, respondents)
            } else {
                return musikui
            }
        })
        return new Contest(
            old.id,
            old.date,
            old.comment,
            new_musikuis,
        )
    }

    constructor(
        readonly id: number,
        readonly date: MusikuiDate,
        readonly comment: string,
        readonly musikuis: Musikui[],
    ) {}

    public has_musikuis(): boolean {
        return this.musikuis.length > 0
    }

}
