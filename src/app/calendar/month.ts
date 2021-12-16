import { Day } from "./day";
import { Week } from "./week";
import { Year } from "./year";

export class Month {
    private number_: number;
    private days_: Day[];
    private year_: Year;
    private date_: Date;
    private daysN_: number;
    public constructor(year: Year, number: number) {
        this.number_ = number;
        this.year_ = year;
        this.date_ = new Date(year.number, number, 1);
        this.daysN_ = new Date(year.number, number + 1, 0).getDate();
        this.days_ = []
        for (let i = 0; i < this.daysN_; i++) this.days_.push(null);
        if (this.date_.getMonth() !== number) {
            throw new Error('Invalid date');
        }
        this.year_._addMonth(this);
    }
    public get number(): number { return this.number_; }
    public getDay(dayNum: number) {
        return this.days_[dayNum - 1] ?? new Day(this, dayNum);
    }
    public get daysN() { return this.daysN_; }
    public get days(): Day[] {
        return this.days_.map((d, i): Day => this.getDay(i));
    }
    public get year(): Year { return this.year_; }
    public get weeks(): Week[] {
        let weeks: Week[] = [];
        for (let i = 1; i <= this.daysN_; i += 7) {
            weeks.push(this.getDay(i).week);
        }
        if (weeks[weeks.length - 1].startDate.getDate() + 7 < this.daysN_) {
            weeks.push(this.getDay(this.daysN_).week);
        }
        return weeks;
    }

    // internal
    public _addDay(day: Day) {
        if (this.days_[day.number - 1] != null) {
            throw new Error('Day already exist');
        }
        this.days_[day.number - 1] = day;
    }
}
