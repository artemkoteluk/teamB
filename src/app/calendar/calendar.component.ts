import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  years = {};
  weeks = {};

  mylog(arg) {
    console.log(...arguments);
    return arguments[arguments.length - 1];
  }

  events = [
    { from: this.nDaysFromTodayAt(-1, 12, 0), to: this.nDaysFromTodayAt(1, 12, 0), name: 'A 3 day event', color: 'rgb(0, 150, 136)' },
    { from: this.nDaysFromTodayAt(0, 11, 0), to: this.nDaysFromTodayAt(0, 12, 0), name: 'A draggable one day event', color: 'rgb(3, 169, 244)' },
    { from: this.nDaysFromTodayAt(0, 12, 0), to: this.nDaysFromTodayAt(0, 12, 30), name: 'A draggable and resizable event', color: 'rgb(255, 152, 0)' },
    { from: this.nDaysFromTodayAt(9, 12, 0), to: this.nDaysFromTodayAt(16, 12, 30), name: 'A long event that spans a week', color: 'rgb(233, 30, 99)' }
  ];

  displayed = {
    view: 'month',
    header: this.monthNames[new Date().getMonth()] + ' ' + new Date().getFullYear(),
    formated: this.getMonthFormatted(null, null),
    month: this.getMonth(null, null),
    week: this.getWeek(null, null, null),
    day: this.getDay(null, null, null),
    events: this.getDay(null, null, null)['events']
  }

  selected = {
    day: this.displayed.day,
    week: this.displayed.week,
    month: this.displayed.month,
    formatedWeek: this.displayed.formated.find(w => w.find((d: any) => d === this.displayed.day) != null)
  }

  daysInMonth(yearN: number, monthN: number): number {
    return new Date(yearN, monthN + 1, 0).getDate();
  }

  getWeek(yearN: number, monthN: number, dayN: number): {} {
    if (yearN == null || monthN == null || dayN == null) {
      var now = new Date();
      yearN = now.getFullYear();
      monthN = now.getMonth();
      dayN = now.getDate();
    }
    var dayOfWeekN = new Date(yearN, monthN, dayN).getDay();
    var firstDayOfWeek = new Date(yearN, monthN, dayN - dayOfWeekN);
    var lastDayOfWeek = new Date(yearN, monthN, dayN + (6 - dayOfWeekN));
    var pad = s => s.toString().padStart(2, '0');
    var dateStr = d => d.getFullYear() + pad(d.getMonth()) + pad(d.getDate());
    var name = 'w' + dateStr(firstDayOfWeek) + '_' + dateStr(lastDayOfWeek);
    if (this.weeks[name] == null) this.weeks[name] = { name };
    return this.weeks[name];
  }

  getYear(yearN: number): {} {
    if (yearN == null) {
      yearN = new Date().getFullYear();
    }
    var name = 'y' + yearN;
    if (this.years[name] == null) this.years[name] = { num: yearN, name };
    return this.years[name];
  }

  getMonth(yearN: number, monthN: number): {} {
    if (monthN == null) {
      monthN = new Date().getMonth();
    }
    var year = this.getYear(yearN);
    var name = 'm' + monthN;
    if (year[name] == null) year[name] = { num: monthN, year, name };
    return year[name];
  }

  getDay(yearN: number, monthN: number, dayN: number): {} {
    if (dayN == null) {
      dayN = new Date().getDate();
    }
    var date = new Date(yearN, monthN, dayN);
    var dateNext = new Date(yearN, monthN, dayN + 1);
    var month = this.getMonth(yearN, monthN);
    var week = this.getWeek(yearN, monthN, dayN);
    var weekDayN = date.getDay();
    var name = 'd' + dayN;
    var weekName = 'd' + weekDayN;
    var day = (month[name] != null) ? month[name] : {
      num: dayN, month, week, name, weekName,
      events: this.events.filter(e => Math.max(date.getTime(), e.from) < Math.min(dateNext.getTime(), e.to))
    };
    month[name] = day;
    week[weekName] = day;
    return day;
  }

  getMonthFormatted(yearN: number, monthN: number): {}[][] {
    if (yearN == null || monthN == null) {
      var now = new Date();
      yearN = now.getFullYear();
      monthN = now.getMonth();
    }
    var firstDayOfWeek = new Date(yearN, monthN, 1).getDay();
    var lastDayOfPrevMonth = new Date(yearN, monthN, 0).getDate();
    var currWeek = 0;
    var currDayOfWeek = 0;
    var data: {}[][] = [[]];
    for (var i = 0; i < firstDayOfWeek; i++) {
      var day = lastDayOfPrevMonth - (firstDayOfWeek - i) + 1;
      data[0].push(this.getDay(yearN, monthN - 1, day));
      currDayOfWeek++;
    }
    var days = this.daysInMonth(yearN, monthN);
    for (var i = 0; i < days; i++) {
      if (currDayOfWeek >= 7) currDayOfWeek = 0, currWeek++, data.push([]);
      data[currWeek].push(this.getDay(yearN, monthN, i + 1));
      currDayOfWeek++;
    }
    for (var i = currDayOfWeek; i < 7; i++) {
      data[currWeek].push(this.getDay(yearN, monthN + 1, 1 + (i - currDayOfWeek)));
    }
    return data;
  }

  isCurrentDay(day) {
    var curr = new Date();
    var currYearN = curr.getFullYear();
    var currMonthN = curr.getMonth();
    var currDayN = curr.getDate();
    return day.num === currDayN && day.month.num === currMonthN && day.month.year.num === currYearN;
  }

  isSelected(day) {
    return this.selected.day === day;
  }

  dayClick(day, formatedWeek) {
    if (day.month === this.displayed.month) {
      if (this.displayed.events.length !== 0) {
        if (this.selected.day === day) {
          this.displayed.events = [];
        }
        else {
          this.displayed.events = day.events;
        }
      }
      else {
        this.displayed.events = day.events;
      }
      if (day.events.length > 0) {
        this.selected.month = day.month;
        this.selected.week = day.week;
        this.selected.day = day;
        this.selected.formatedWeek = formatedWeek;
      }
    }
  }

  next() {
    if (this.displayed.view === 'month') {
      var nextMonthN = this.displayed.month['num'] + 1;
      var nextMonthYearN = this.displayed.month['year'].num;
      if (nextMonthN >= 12) nextMonthN = 0, nextMonthYearN++;
      this.displayMonth(nextMonthYearN, nextMonthN);
    }
    else {
      console.log("Unimplmented");
    }
  }
  prev() {
    if (this.displayed.view === 'month') {
      var prevMonthN = this.displayed.month['num'] - 1;
      var prevMonthYearN = this.displayed.month['year'].num;
      if (prevMonthN < 0) prevMonthN = 11, prevMonthYearN--;
      this.displayMonth(prevMonthYearN, prevMonthN);
    }
    else {
      console.log("Unimplmented");
    }
  }

  displayMonth(yearN, monthN) {
    this.selected.day = this.getDay(yearN, monthN, 1);
    this.selected.week = this.selected.day['week'];
    this.selected.month = this.selected.day['month'];
    this.displayed.formated = this.getMonthFormatted(yearN, monthN);
    this.displayed.day = this.selected.day;
    this.displayed.events = this.displayed.day['events'];
    this.displayed.header = this.monthNames[monthN] + ' ' + yearN;
    this.displayed.month = this.selected.month;
    this.displayed.week = this.selected.week;
  }

  nDaysFromTodayAt(daysN, hoursN, minutesN): number {
    var today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysN, hoursN, minutesN);
    return today.getTime();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
