import SearchCondition from "@/domain/SearchCondition"

export default class SearchConditionFactory {

    /**
     * viewrouterを使用したURLパラメータにより、
     * booleanが01で入ってくる
     */
    public static from_url_params(params: any): SearchCondition {
        const condition: SearchCondition = {
            min_level: params.min_level,
            max_level: params.max_level,
            plus_selected: params.plus_selected === "1",
            multiple_selected: params.multiple_selected === "1",
            divide_selected: params.divide_selected === "1",
            min_col: params.min_col,
            max_col: params.max_col,
        }
        return condition
    }
}
