import Musikui from "./Musikui"
import MusikuiDate from "../value_object/MusikuiDate"

export default class Contest {

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
