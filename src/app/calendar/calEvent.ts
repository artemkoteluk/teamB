import { Day } from "./day";
import { Tline } from "./tline";

export class CalEvent {
    private startDate_: Date;
    private endDate_: Date;
    private primaryColor_: string;
    private secondaryColor_: string;
    private name_: string;
    public constructor(startDate: Date, endDate: Date, primaryColor: string, secondaryColor: string, name: string) {
        this.startDate_ = startDate;
        this.endDate_ = endDate;
        this.primaryColor_ = primaryColor;
        this.secondaryColor_ = secondaryColor;
        this.name_ = name;
        Tline._addEvent(this);
    }
    public get startDate(): Date { return this.startDate_; }
    public get endDate(): Date { return this.endDate_; }
    public get primaryColor(): string { return this.primaryColor_; }
    public get secondaryColor(): string { return this.secondaryColor_; }
    public get name(): string { return this.name_; }
    public getDayInfo(day: Day) {
        var start = this.startDate_.getTime() - day.date.getTime(),
            length = this.endDate_.getTime() - this.startDate_.getTime(),
            startsWithInADay = true, endsWithInADay = true;
        if (start < 0) {
            startsWithInADay = false;
            length += start;
            start = 0;
        }
        if (length > (86400000 - start)) {
            length = (86400000 - start);
            endsWithInADay = false;
        }
        return { start, length, startsWithInADay, endsWithInADay };
    }
}
