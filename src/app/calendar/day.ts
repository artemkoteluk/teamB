import { CalEvent } from "./calEvent";
import { Month } from "./month";
import { Tline } from "./tline";
import { Week } from "./week";

export class Day {
    private number_: number;
    private numberInWeek_: number;
    private month_: Month;
    private week_: Week;
    private date_: Date;
    public constructor(month: Month, number: number) {
        this.number_ = number;
        this.month_ = month;
        this.date_ = new Date(month.year.number, month.number, number);
        this.numberInWeek_ =  this.date_.getDay();
        if (this.date_.getDate() !== number) {
            throw new Error('Invalid date');
        }
        this.month_._addDay(this);
        this.week_ = Tline.getWeek(this);
        this.week_._addDay(this);
    }
    public get events(): CalEvent[] {
        return Tline.getEvents(this);
    }
    public get number(): number { return this.number_; }
    public get numberInWeek(): number { return this.numberInWeek_; }
    public get month(): Month { return this.month_; }
    public get date(): Date { return this.date_; }
    public get week(): Week { return this.week_; }
}
