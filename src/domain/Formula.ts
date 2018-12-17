import Hissan from "./Hissan"

export default class Formula {

    public static default(): Formula {
        return new Formula([0, 0], 0)
    }

    public static from_hissan(hissan: Hissan): Formula {
        return new Formula([0, 0], 0)
    }

    constructor(
        readonly lefts: number[],
        readonly right: number,
    ) {}

}
