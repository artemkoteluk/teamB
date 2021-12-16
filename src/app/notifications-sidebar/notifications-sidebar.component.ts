import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {slideInOut} from "../right-sidebar/sidebar-animation";
import {DatePipe} from "@angular/common";
import {SectionInterface} from "./section-interface";
import {StatInterface} from "./stat-interface";
import {myEvents, todos, statistics, notifications} from "./notifications-data"

@Component({
  selector: 'app-notifications-sidebar',
  templateUrl: './notifications-sidebar.component.html',
  styleUrls: ['./notifications-sidebar.component.css'],
  animations: [slideInOut],
})
export class NotificationsSidebarComponent implements OnInit {

  myEvents: SectionInterface[] = myEvents;
  todos: SectionInterface[] = todos;
  statistics: StatInterface[] = statistics;
  notifications: SectionInterface[] = notifications;

  constructor(public datepipe: DatePipe) {
  }

  ngOnInit(): void {
  }

  @Output() animationStateChanged = new EventEmitter<AnimationEvent>();

  animationState: 'void' | 'enter' | 'leave' = 'enter';

  public onAnimationStart(event: AnimationEvent): void {
    this.animationStateChanged.emit(event);
  }

  public onAnimationDone(event: AnimationEvent): void {
    this.animationStateChanged.emit(event);
  }

  public startExitAnimation(): void {
    this.animationState = 'leave';
  }

  public getDateFormat(): string {
    return this.datepipe.transform(new Date(), 'EEEE, MMMM d');
  }

}
