/**
 * yyyy/mm/dd 形式必須！！
 */
export default class MusikuiDate {

    public static from_string(string_date: string): MusikuiDate {
        const sp = string_date.split("/")
        const y = sp[0]
        const m = this.pad2keta(sp[1])
        const d = this.pad2keta(sp[2])
        const date = new Date(y + "-" + m + "-" + d + "T00:00:00")
        return new MusikuiDate(date)
    }

    private static pad2keta(s: string | number): string {
        return ("0" + s).slice(-2)
    }

    /**
     *  コンストラクタ
     * @param date yyyy/mm/dd
     */
    constructor(readonly date: Date) {}


    public format(): string {
        const yyyy = this.date.getFullYear().toString()
        // 0埋め用
        const mm = MusikuiDate.pad2keta(this.date.getMonth() + 1)
        const dd = MusikuiDate.pad2keta(this.date.getDate())
        return `${yyyy}/${mm}/${dd}`
    }

    public add_date(n: number) {
        const date = this.date.getDate()
        this.date.setDate(date + n)
    }

    /**
     * getDayの日曜日は 0
     */
    public next_sunday(): MusikuiDate {
        const new_date: MusikuiDate = new MusikuiDate(this.date)
        const day = this.date.getDay()
        const diff = 7 - day
        new_date.add_date(diff)
        return new_date
    }

    /**
     * 来月の最初の日曜日の日付のインスタンスを新規作成して返す
     */
    public next_month_first_sunday(): MusikuiDate {
        // 来月の1日を取得
        const next_month_first_date = new Date(this.date.getTime())
        next_month_first_date.setMonth(next_month_first_date.getMonth() + 1)
        next_month_first_date.setDate(1)

        // 1日の曜日
        const next_month_first_day = next_month_first_date.getDay()

        // 来月の最初の日曜日の日付
        const next_month_first_sunday = new Date(next_month_first_date.getTime())
        next_month_first_sunday.setDate(7 - next_month_first_day + 1)

        return new MusikuiDate(next_month_first_sunday)
    }

}
