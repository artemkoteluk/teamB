import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Router} from "@angular/router";
import {SidebarService} from "../right-sidebar/sidebar.service";
import {OverlayRef} from "@angular/cdk/overlay";
import {NotificationInterface} from "./notification-interface";
import {RouteGroupInterface} from "./routegroup-interface";
import {notifications, routeGroups} from "./navbar-data";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public elem: HTMLElement;
  public menuOpened: boolean = false;
  public notifications: Array<NotificationInterface> = notifications;
  public routeForm: FormGroup = this._formBuilder.group({
    routeGroup: '',
  });
  private routeGroups: RouteGroupInterface[] = routeGroups;
  public routeGroupOptions: Observable<RouteGroupInterface[]>;

  constructor(@Inject(DOCUMENT) private document: any, private _formBuilder: FormBuilder, private router: Router, private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this.routeGroupOptions = this.routeForm.get('routeGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.routeGroups.map((e: any) => {
      // console.log(e.routes.filter(item => item.name.toLowerCase().includes(filterValue)));
      return {groupName: e.groupName, routes: e.routes.filter(item => item.name.toLowerCase().includes(filterValue))}
    }).filter(group => group.routes.length > 0);
  };

  public Fullscreen(): void {
    this.elem.requestFullscreen();
  }

  public menuToggle(): void {
    this.menuOpened = !this.menuOpened;
  }

  public removeNotification($event: MouseEvent, i: number): void {
    $event.stopPropagation();
    this.notifications.splice(i, 1);
  }

  public markRead($event: MouseEvent): void {
    $event.stopPropagation();
    for (let n of this.notifications) {
      n.isActive = false;
    }
  }

  public navbarNavigate(route: string): void {
    this.router.navigate([route]);
  }

  public openRightSidebar(mode: boolean): void {
    const sidebarRef: OverlayRef = this.sidebarService.open(mode);
  }
}
