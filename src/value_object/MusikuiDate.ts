/**
 * yyyy/mm/dd 形式必須！！
 */
export default class MusikuiDate {

    private date: Date

    constructor(
        date: string,
    ) {
        const sp = date.split("/")
        const y = sp[0]
        const m = this.pad2keta(sp[1])
        const d = this.pad2keta(sp[2])
        this.date = new Date(y + "-" + m + "-" + d + "T00:00:00")
    }

    public format(): string {
        const yyyy = this.date.getFullYear().toString()
        // 0埋め用
        const mm = this.pad2keta(this.date.getMonth() + 1)
        const dd = this.pad2keta(this.date.getDate())
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
        const new_date: MusikuiDate = new MusikuiDate(this.format())
        const day = this.date.getDay()
        const diff = 7 - day
        new_date.add_date(diff)
        return new_date
    }

    private pad2keta(s: string | number): string {
        return ("0" + s).slice(-2)
    }

}
