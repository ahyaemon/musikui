import Contest from "@/domain/Contest"
import MusikuiFactory from "./MusikuiFactory"
import MusikuiDate from "@/value_object/MusikuiDate"

export default class ContestFactory {

    public static from_object(object: any): Contest {
        return new Contest(
            object.id,
            MusikuiDate.from_string(object.date),
            object.comment,
            object.musikuis.map((musikui: any) => {
                return MusikuiFactory.from_object(musikui)
            }),
        )
    }
    public static from_id_and_date(id: number, date: string): Contest {
        return new Contest(
            id,
            MusikuiDate.from_string(date),
            "",
            [],
        )
    }

}
