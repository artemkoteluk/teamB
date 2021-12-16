import { Component, OnInit } from '@angular/core';
import { CalEvent } from './calEvent';
import { Day } from './day';
import { Month } from './month';
import { Tline } from './tline';
import { Week } from './week';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  private weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private hourNames = [
    '12 AM', '', '1 AM', '', '2 AM', '', '3 AM', '', '4 AM', '', '5 AM', '', '6 AM', '', '7 AM', '', '8 AM', '', '9 AM', '', '10 AM', '', '11 AM', '',
    '12 PM', '', '1 PM', '', '2 PM', '', '3 PM', '', '4 PM', '', '5 PM', '', '6 PM', '', '7 PM', '', '8 PM', '', '9 PM', '', '10 PM', '', '11 PM', ''
  ];

  public displayed: {
    month: Month
    week: Week
    day: Day
    header: string
    view: 'day' | 'month' | 'week'
  }
  private eventsShown = true
  private selected: {
    month: Month
    week: Week
    day: Day
  }

  constructor() {
    const now: Date = new Date();
    this.initEvents(now);
    this.initSelectedDisplayed(now);
  }

  ngOnInit(): void {
  }

  private initEvents(now: Date) {
    const hr = now.getHours(), mn = now.getMinutes();
    new CalEvent(...this.initEventParameters(now, -1, 2, hr, mn, hr, mn, 'rgb(128, 203, 196)', 'rgb(0, 150, 136)', 'A 3 day event'));
    new CalEvent(...this.initEventParameters(now, 0, 0, hr - 2, mn, hr, mn, 'rgb(255, 204, 128)', 'rgb(255, 152, 0)', 'A draggable and resizable event'));
    new CalEvent(...this.initEventParameters(now, 0, 0, hr, mn, hr, mn + 30, 'rgb(129, 212, 250)', 'rgb(3, 169, 244)', 'A draggable one day event'));
    new CalEvent(...this.initEventParameters(now, 9, 7, hr, mn, hr, mn, 'rgb(244, 143, 177)', 'rgb(233, 30, 99)', 'A long event that spans a week'));
    this.eventsShown = true;
  }

  private initSelectedDisplayed(now: Date) {
    const month = Tline.getYear(now.getFullYear()).getMonth(now.getMonth());
    const day = month.getDay(now.getDate());
    const week = day.week;
    this.displayed = { month, week, day, header: this.monthNames[month.number] + ' ' + month.year.number, view: 'month' };
    this.selected = { month, week, day };
  }

  private initEventParameters(
    now: Date, daysFromNow: number, durationdays: number,
    startHour: number, startMinute: number, endHour: number, endMinute: number,
    primaryColor: string, secondaryColor: string, name: string
  ): [Date, Date, string, string, string] {
    const
      y = now.getFullYear(), m = now.getMonth(), d = now.getDate(),
      st = new Date(y, m, d + daysFromNow, startHour, startMinute),
      en = new Date(y, m, d + daysFromNow + durationdays, endHour, endMinute);
    return [st, en, primaryColor, secondaryColor, name];
  }

  private isCurrentDay(day: Day) {
    const now = new Date();
    return (
      day.date.getDate() == now.getDate() &&
      day.date.getMonth() === now.getMonth() &&
      day.date.getFullYear() === day.date.getFullYear()
    );
  }

  private getCssClasses(param: Day): string {
    var classes: string[] = [];
    switch (this.displayed.view) {
      case 'month':
        if (param instanceof Day) {
          classes.push('cell');
          if (param.month !== this.displayed.month) classes.push('grayed-out');
          if (this.isCurrentDay(param)) classes.push('current-day');
          if (this.selected.day === param) classes.push('selected-day');
        }
        break;
      case 'week':
        if (param instanceof Day) {
          classes.push('header-column');
          if (this.isCurrentDay(param)) classes.push('current-day');
          if (this.selected.day === param) classes.push('selected-day');
        }
        break;
    }
    return classes.join(' ');
  }

  private dayClick(day: Day) {
    if (this.displayed.month === day.month || this.displayed.view === 'week' || this.displayed.view === 'day') {
      if (day.events.length > 0) {
        if (this.selected.day === day) {
          this.eventsShown = !(this.eventsShown);
        } else {
          this.select(day);
          this.eventsShown = true;
        }
      }
      else this.eventsShown = false;
    }
  }

  private selectOrDisplay(select: boolean, param: (Day | Week | Month)) {
    const field = select ? 'selected' : 'displayed';
    if (param instanceof Day) {
      this[field].day = param;
      this[field].week = param.week;
      this[field].month = param.month;
    }
    else if (param instanceof Week) {
      this[field].week = param;
      this[field].day = param.getDay(0);
      this[field].month = this.selected.day.month;
    }
    else if (param instanceof Month) {
      this[field].month = param;
      this[field].day = param.getDay(1);
      this[field].week = this.selected.day.week;
    }
  }

  private select(param: (Day | Week | Month)) {
    this.selectOrDisplay(true, param);
  }

  private display(param: (Day | Week | Month)) {
    this.selectOrDisplay(false, param);
  }

  public nextClick() {
    var now = new Date();
    if (this.displayed.view === 'month') {
      var monthNum = this.displayed.month.number + 1;
      var yearNumber = this.displayed.month.year.number;
      if (monthNum >= 12) monthNum = 0, yearNumber++;
      const month = Tline.getYear(yearNumber).getMonth(monthNum);
      this.displayed.header = this.monthNames[month.number] + ' ' + month.year.number;
      if (now.getFullYear() === month.year.number && now.getMonth() === month.number) {
        this.display(month.getDay(now.getDate()));
        //this.select(month.getDay(now.getDate()));
      }
      else {
        this.display(month);
        //this.select(month);
      }
    } else if (this.displayed.view === 'week') {
      var date = new Date(
        this.displayed.week.endDay.month.year.number,
        this.displayed.week.endDay.month.number,
        this.displayed.week.endDay.number + 1
      );
      var dayNumber = date.getDate();
      var monthNumber = date.getMonth();
      var yearNumber = date.getFullYear();
      const week = Tline.getWeek(Tline.getYear(yearNumber).getMonth(monthNumber).getDay(dayNumber));
      this.displayed.header = (this.monthNames[week.startDate.getMonth()].substr(0, 3) + ' ' + week.startDate.getDate()
        + (week.startDate.getFullYear() === week.endDate.getFullYear() ? '' : (', ' + week.startDate.getFullYear()))
        + ' - ' + this.monthNames[week.endDate.getMonth()].substr(0, 3) + ' ' + week.endDate.getDate() + ', ' + week.endDate.getFullYear()
      );
      if (week.startDate.getTime() > now.getTime() && (week.endDate.getTime() + 86400000) < now.getTime()) {
        this.display(week.getDay(now.getDay()));
        //this.select(month.getDay(now.getDate()));
      }
      else {
        this.display(week);
        //this.select(week);
      }
    } else {
      var date = new Date(
        this.displayed.day.month.year.number,
        this.displayed.day.month.number,
        this.displayed.day.number + 1
      );
      var dayNumber = date.getDate();
      var monthNumber = date.getMonth();
      var yearNumber = date.getFullYear();
      const day = Tline.getYear(yearNumber).getMonth(monthNumber).getDay(dayNumber);
      this.displayed.header = (
        this.weekNames[day.numberInWeek] + ', ' + this.monthNames[day.month.number] + ' ' + day.number + ', ' + day.month.year.number
      );
      this.display(day);
      //this.select(day);
    }
  }

  public prevClick() {
    var now = new Date();
    if (this.displayed.view === 'month') {
      var monthNum = this.displayed.month.number - 1;
      var yearNum = this.displayed.month.year.number;
      if (monthNum < 0) monthNum = 11, yearNum--;
      const month = Tline.getYear(yearNum).getMonth(monthNum);
      this.displayed.header = this.monthNames[month.number] + ' ' + month.year.number;
      if (now.getFullYear() === month.year.number && now.getMonth() === month.number) {
        this.display(month.getDay(now.getDate()));
        //this.select(month.getDay(now.getDate()));
      }
      else {
        this.display(month);
        //this.select(month);
      }
    } else if (this.displayed.view === 'week') {
      var date = new Date(
        this.displayed.week.startDay.month.year.number,
        this.displayed.week.startDay.month.number,
        this.displayed.week.startDay.number - 1
      );
      var dayNumber = date.getDate();
      var monthNumber = date.getMonth();
      var yearNumber = date.getFullYear();
      const week = Tline.getWeek(Tline.getYear(yearNumber).getMonth(monthNumber).getDay(dayNumber));
      this.displayed.header = (this.monthNames[week.startDate.getMonth()].substr(0, 3) + ' ' + week.startDate.getDate()
        + (week.startDate.getFullYear() === week.endDate.getFullYear() ? '' : (', ' + week.startDate.getFullYear()))
        + ' - ' + this.monthNames[week.endDate.getMonth()].substr(0, 3) + ' ' + week.endDate.getDate() + ', ' + week.endDate.getFullYear()
      );
      if (week.startDate.getTime() > now.getTime() && (week.endDate.getTime() + 86400000) < now.getTime()) {
        this.display(week.getDay(now.getDay()));
        //this.select(month.getDay(now.getDate()));
      }
      else {
        this.display(week);
        //this.select(week);
      }
    } else {
      var date = new Date(
        this.displayed.day.month.year.number,
        this.displayed.day.month.number,
        this.displayed.day.number - 1
      );
      var dayNumber = date.getDate();
      var monthNumber = date.getMonth();
      var yearNumber = date.getFullYear();
      const day = Tline.getYear(yearNumber).getMonth(monthNumber).getDay(dayNumber);
      this.displayed.header = (
        this.weekNames[day.numberInWeek] + ', ' + this.monthNames[day.month.number] + ' ' + day.number + ', ' + day.month.year.number
      );
      this.display(day);
      //this.select(day);
    }
  }

  public changeView(view: 'month' | 'week' | 'day') {
    this.displayed.view = view;
    switch (view) {
      case 'day':
        const day = this.selected.day;
        this.displayed.header = (
          this.weekNames[day.numberInWeek] + ', ' + this.monthNames[day.month.number] + ' ' + day.number + ', ' + day.month.year.number
        );
        this.display(this.selected.day);
        break;
      case 'week':
        const week = this.selected.week;
        this.displayed.header = (this.monthNames[week.startDate.getMonth()].substr(0, 3) + ' ' + week.startDate.getDate()
          + (week.startDate.getFullYear() === week.endDate.getFullYear() ? '' : (', ' + week.startDate.getFullYear()))
          + ' - ' + this.monthNames[week.endDate.getMonth()].substr(0, 3) + ' ' + week.endDate.getDate() + ', ' + week.endDate.getFullYear()
        );
        this.display(week);
        break;
      case 'month':
        const month = this.selected.month;
        this.displayed.header = this.monthNames[month.number] + ' ' + month.year.number;
        this.display(month);
        break
    }
  }

  public groupOverlappingEvents(day: Day) {
    return CalendarComponent.partition(day.events);
  }

  public getEventCssClasses(event: CalEvent, day: Day) {
    const info = event.getDayInfo(day);
    const classes = [];
    if (info.startsWithInADay) classes.push('starts-within-a-day');
    if (info.endsWithInADay) classes.push('ends-within-a-day');
    return classes.join(' ');
  }
  public getEventPositionAndSize(event: CalEvent, day: Day) {
    const info = event.getDayInfo(day);
    return 'top: ' + (Math.round(info.start / 1000 / 60) + 1) + 'px; height: '
      + (Math.round(info.length / 1000 / 60) - 5) + 'px; background-color:'
      + event.primaryColor + '; border-color: ' + event.secondaryColor;
  }
  public getCurrentTimeOffset() {
    const now = new Date();
    return 'position:absolute; width: 100%; border-bottom: 2px solid #ea4334; top: ' + (now.getHours() * 60 + now.getMinutes()) + 'px';
  }

  private static partition(array: CalEvent[], presorted = false) {
    const groups: CalEvent[][] = [];
    var overlapped = [], arr = Array.from(array);
    if (!presorted) arr.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    do {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        var overlaps = false;
        for (let j = i + 1; j < arr.length && !overlaps; j++) {
          overlaps = element.endDate.getTime() > arr[j].startDate.getTime();
        }
        if (overlaps) {
          overlapped.push(arr.splice(i, 1)[0]);
          i--;
        }
      }
      if (arr.length > 0) {
        groups.unshift(arr);
      }
      arr = overlapped;
      overlapped = [];
    }
    while (arr.length > 0);
    return groups;
  }
}