import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {map, startWith} from "rxjs/operators";

export interface Notification {
  id:number,
  text:string,
  time:string,
  isActive: boolean
}
export interface RouteGroup {
  groupName: string;
  routeNames: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  elem: any;
  menuOpened=false;
  notifications: Array<Notification> = [
    {
      id: 0,
      text: 'This is a notification',
      time: 'few sec ago',
      isActive: true
    },
    {
      id: 4,
      text: 'User bought your template',
      time: '23 min ago',
      isActive: true
    },
    {
      id: 2,
      text: 'Server crashed',
      time: 'an hour ago',
      isActive: true
    },
    {
      id: 3,
      text: 'New user registered',
      time: '6 hours ago',
      isActive: false
    },
  ];
  routeForm: FormGroup = this._formBuilder.group({
    routeGroup: '',
  });
  routeGroups: RouteGroup[] = [
    {
      groupName: 'Recently Visited',
      routeNames: ['All-In-One-Table', 'Form Wizard', 'Inbox', 'WYSIWYG Editor', 'Google Maps'],
    },
    {
      groupName: 'Frequently Visited',
      routeNames: ['Form Elements', 'Form Wizard', 'WYSIWYG Editor', 'Google Maps', 'Material Dialog'],
    },
    ]
  routeGroupOptions: Observable<RouteGroup[]>;

  constructor(@Inject(DOCUMENT) private document: any, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this.routeGroupOptions = this.routeForm.get('routeGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );
  }

  private _filterGroup(value: string): RouteGroup[] {
    if (value) {
      return this.routeGroups
        .map(group => ({groupName: group.groupName, routeNames: _filter(group.routeNames, value)}))
        .filter(group => group.routeNames.length > 0);
    }

    return this.routeGroups;
  }

  Fullscreen() {
    this.elem.requestFullscreen();
  }

  menuToggle() {
    this.menuOpened=!this.menuOpened;
  }

  removeNotification($event: MouseEvent, i: number) {
    $event.stopPropagation();
    this.notifications.splice(i, 1);
  }

  markRead($event: MouseEvent) {
    $event.stopPropagation();
    for (let n of this.notifications) {
      n.isActive=false;
    }
  }
}
