export default class Paging {

    constructor(
        readonly current_page_number: number,
        readonly max_record_amount: number,
    ) {}

    public get_page_contents<T>(li: T[]): T[] {
        if (li.length === 0) {
            return li
        }

        const start_index = (this.current_page_number - 1) * this.max_record_amount
        const end_index = this.current_page_number * this.max_record_amount
        if (li.length > end_index) {
            return li.slice(start_index, end_index)
        }
        return li.slice(start_index, li.length)
    }

}
