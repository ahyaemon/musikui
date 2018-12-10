import Contest from "@/domain/Contest"
import MusikuiFactory from "./MusikuiFactory"
import MusikuiDate from "@/value_object/MusikuiDate"

export default class ContestFactory {

    public static from_object(object: any) {
        return new Contest(
            new MusikuiDate(object.date),
            object.comment,
            object.musikuis.map((musikui: any) => {
                return MusikuiFactory.from_object(musikui)
            }),
        )
    }

}
