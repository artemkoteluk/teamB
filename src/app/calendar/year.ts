import { Week } from "./week";
import { Month } from "./month";
import { Tline } from "./tline";

export class Year {
    private number_: number;
    private months_: Month[];
    private date_: Date;
    private monthN_: number;
    private daysN_: number;
    public constructor(number: number) {
        this.number_ = number;
        this.date_ = new Date(number, 0, 1);
        this.months_ = [null, null, null, null, null, null, null, null, null, null, null, null];
        this.monthN_ = 12;
        this.daysN_ = this.months_.map((e, i) => i).reduce((p, c) => p + new Date(number, c + 1, 0).getDate(), 0);
        if (this.date_.getFullYear() !== number) {
            throw new Error('Invalid date');
        }
        Tline._addYear(this);
    }
    public get number(): number { return this.number_ };
    public getMonth(monthNum: number): Month {
        return this.months_[monthNum] ?? new Month(this, monthNum);
    }
    public get monthN() { return this.monthN_; }
    public get months(): Month[] {
        return this.months_.map((m, i) => this.getMonth(i));
    }
    public get weeks(): Week[] {
        let weeks: Week[] = [], currDate: Date;
        for (let i = 1; i <= this.daysN_; i += 7) {
            currDate = new Date(this.number_, 0, i);
            weeks.push(this.getMonth(currDate.getMonth()).getDay(currDate.getDate()).week);
        }
        if (weeks[weeks.length - 1].startDate.getDate() + 7 < this.daysN_) {
            currDate = new Date(this.number_, 0, this.daysN_);
            weeks.push(this.getMonth(currDate.getMonth()).getDay(currDate.getDate()).week);
        }
        return weeks;
    }

    // internal
    public _addMonth(month: Month) {
        if (this.months_[month.number] != null) {
            throw new Error('Month already exist');
        }
        this.months_[month.number] = month;
    }
}
