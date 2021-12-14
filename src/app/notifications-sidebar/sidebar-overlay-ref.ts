import { OverlayRef } from '@angular/cdk/overlay';
import { take, filter } from 'rxjs/operators';
import {Observable, Subject} from "rxjs";
import {NotificationsSidebarComponent} from "./notifications-sidebar.component";

export class SidebarOverlayRef {
  constructor(private overlayRef: OverlayRef) {}

  private _beforeClose = new Subject<void>();
  private _afterClosed = new Subject<void>();

  componentInstance: NotificationsSidebarComponent;

  afterClosed(): Observable<void> {
    return this._afterClosed.asObservable();
  }

  beforeClose(): Observable<void> {
    return this._beforeClose.asObservable();
  }

  close(): void {
    // Listen for animation 'start' events
    this.componentInstance.animationStateChanged
      .pipe(filter(event => (<any>event).phaseName === 'start'), take(1))
      .subscribe(() => {
        this._beforeClose.next();
        this._beforeClose.complete();
        this.overlayRef.detachBackdrop()
      });

    // Listen for animation 'done' events
    this.componentInstance.animationStateChanged
      .pipe(filter(event => (<any>event).phaseName === 'done' && (<any>event).toState === 'leave'), take(1))
      .subscribe(() => {
        this.overlayRef.dispose();
        this._afterClosed.next();
        this._afterClosed.complete();

        // Make sure to also clear the reference to the
        // component instance to avoid memory leaks
        this.componentInstance = null;
      });

    // Start exit animation
    this.componentInstance.startExitAnimation();
  }
}
