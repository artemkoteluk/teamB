import { Day } from "./day";
import { Tline } from "./tline";

function getDayFromDate(date: Date, addDays: number = 0): Day {
    let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + addDays);
    return Tline.getYear(newDate.getFullYear()).getMonth(newDate.getMonth()).getDay(newDate.getDate());
}

export class Week {
    private startDay_: Day;
    private endDay_: Day;
    private startDate_: Date;
    private endDate_: Date;
    private days_: Day[];
    private daysN_: number;
    public constructor(day: Day) {
        let dayOfWeek: number = day.date.getDay();
        this.startDate_ = new Date(day.month.year.number, day.month.number, day.number - dayOfWeek);
        this.endDate_ = new Date(day.month.year.number, day.month.number, day.number + (6 - dayOfWeek));
        this.days_ = [null, null, null, null, null, null, null];
        this.daysN_ = 7;
        Tline._addWeek(this);
    }
    public getDay(dayNum: number) {
        return this.days_[dayNum] ?? getDayFromDate(this.startDate_, dayNum);
    }
    public get daysN() { return this.daysN_; }
    public get days(): Day[] {
        return this.days_.map((d, i) => this.getDay(i));
    }
    public get startDay(): Day {
        return this.startDay_ ?? (this.startDay_ = getDayFromDate(this.startDate_));
    }
    public get endDay(): Day {
        return this.endDay_ ?? (this.endDay_ = getDayFromDate(this.endDate_));
    }
    public get startDate():Date { return this.startDate_; }
    public get endDate():Date { return this.endDate_; }

    // internal
    public _addDay(day: Day) {
        if (this.days_[day.numberInWeek] != null) {
            throw new Error('Day already exist');
        }
        this.days_[day.numberInWeek] = day;
    }
}
