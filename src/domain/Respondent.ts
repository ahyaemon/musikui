export default class Respondent {

    public static default(): Respondent {
        return new Respondent(0, "gonbey", "no comment", "2018/12/17")
    }

    constructor(
        readonly respondent_id: number,
        readonly name: string,
        readonly comment: string,
        readonly answer_datetime: string,
    ) {}

}
