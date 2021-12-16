import { CalEvent } from "./calEvent";
import { Day } from "./day";
import { Month } from "./month";
import { Week } from "./week";
import { Year } from "./year";

function getStartEndDate(forWhat: (Day | Week | Month | Year)): [Date, Date] {
    let startDate: Date, endDate: Date;
    if (forWhat instanceof Day) {
        var day = forWhat as Day;
        startDate = day.date;
        endDate = new Date(day.month.year.number, day.month.number, day.number + 1);
    }
    else {
        startDate = new Date(0);
        endDate = new Date(0)
    }
    return [startDate, endDate];
}

class TlineInstance {
    // Singleton logic
    private static _instance: TlineInstance;
    private constructor() { }
    public static get Instance(): TlineInstance {
        return this._instance ?? (this._instance = new this());
    }

    private years_: Year[] = [];
    private weeks_: Week[] = [];
    private events_: CalEvent[] = [];
    public getYear(number: number): Year {
        return this.years_.find(y => y.number === number) ?? new Year(number);
    }
    public getWeek(day: Day): Week {
        return this.weeks_.find((w: Week) => day.date.getTime() >= w.startDate.getTime() && day.date.getTime() <= w.endDate.getTime()) ?? new Week(day);
    }
    public getEvents(forWhat: (Day | Week | Month | Year)): CalEvent[] {
        var events: CalEvent[] = []
        if (forWhat instanceof Day || forWhat instanceof Week || forWhat instanceof Month || forWhat instanceof Year) {
            var [startDate, endDate]: [Date, Date] = getStartEndDate(forWhat);
            events = this.events_.filter(
                (event: CalEvent) => Math.max(startDate.getTime(), event.startDate.getTime()) < Math.min(endDate.getTime(), event.endDate.getTime())
            );
        }
        return events;
    }

    // internal
    public _addYear(year: Year): void {
        if (this.years_.some((y: Year) => y.number === year.number)) {
            throw new Error('Year already exist');
        }
        this.years_.push(year);
        this.years_.sort((a: Year, b: Year) => a.number - b.number);
    }
    public _addWeek(week: Week): void {
        if (this.weeks_.some((w: Week) => w.startDate.getTime() === week.startDate.getTime())) {
            throw new Error('Week already exist');
        }
        this.weeks_.push(week);
        this.weeks_.sort((a: Week, b: Week) => a.startDate.getTime() - b.startDate.getTime());
    }
    public _addEvent(event: CalEvent) {
        if(!(this.events_.includes(event))) {
            this.events_.push(event);
            this.events_.sort((a: CalEvent, b: CalEvent) => a.startDate.getTime() - b.startDate.getTime());
        }
    }
}

var Tline: TlineInstance = TlineInstance.Instance;

export { Tline };
