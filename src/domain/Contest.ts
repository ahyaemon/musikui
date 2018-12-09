import Musikui from "./Musikui"
import MusikuiDate from "../value_object/MusikuiDate"

export default class Contest {

    constructor(
        readonly date: MusikuiDate,
        readonly comment: string,
        readonly musikuis: Musikui[],
    ) {}

    public get_date(): string {
        return this.date.get_date()
    }

    public get_next_sunday(): string {
        const next_sunday = this.date.next_sunday()
        return next_sunday.get_date()
    }

    public has_musikuis(): boolean {
        return this.musikuis.length > 0
    }

}
