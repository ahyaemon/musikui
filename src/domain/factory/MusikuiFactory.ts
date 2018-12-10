import Musikui from "@/domain/Musikui"

export default class MusikuiFactory {

    public static from_object(object: any): Musikui {
        return new Musikui(
            object.id,
            object.level,
            object.comment,
            object.mark,
            object.formula,
            object.hissan_question,
            object.hissan_answer,
            object.nrow,
            object.ncol,
            object.respondents,
        )
    }

}
