import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Router} from "@angular/router";

export interface Notification {
  id:number,
  text:string,
  time:string,
  isActive: boolean
}
export interface RouteGroup {
  groupName: string;
  routes: {name: string, route: string}[];
}


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
      routes: [
        {name: 'All-In-One-Table', route: '/main/table'},
        {name: 'Form Wizard', route: '/main/form-wizard'},
        {name: 'Inbox', route: '/main/inbox'},
        {name: 'WYSIWYG Editor', route: '/main/editor'},
        {name: 'Google Maps', route: '/main/google-map'}
      ],
    },
    {
      groupName: 'Frequently Visited',
      routes: [
        {name: 'Form Elements', route: '/main/form-elements'},
        {name: 'Form Wizard',  route: '/main/form-wizard'},
        {name: 'WYSIWYG Editor',  route: '/main/editor'},
        {name: 'Google Maps', route: '/main/google-map'},
        {name: 'Material Dialog', route: '/main/components'},
      ],
    },
    ]
  routeGroupOptions: Observable<RouteGroup[]>;

  constructor(@Inject(DOCUMENT) private document: any, private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this.routeGroupOptions = this.routeForm.get('routeGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter( value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.routeGroups.map((e: any) => {
      // console.log(e.routes.filter(item => item.name.toLowerCase().includes(filterValue)));
      return {groupName: e.groupName, routes: e.routes.filter(item => item.name.toLowerCase().includes(filterValue))}
    }).filter(group => group.routes.length > 0);
  };

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

  navbarNavigate(route: string) {
    this.router.navigate([route]);
  }
}
