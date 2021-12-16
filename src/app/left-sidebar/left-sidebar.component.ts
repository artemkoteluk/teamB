import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {RoutesInterface} from "./routes-inteface";
import {appRoutes} from "./left-sidebar-data";

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  public showbackground: boolean = false;
  private location: string = 'Oops! Location not found...';
  private path: string = this.router.url.toString();
  public showFiller: boolean = true;
  public canToggle: boolean = true;

  public appRoutes: RoutesInterface[] = appRoutes;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.initRouts()
  }

  private initRouts(): void {
    for (let appRoute of this.appRoutes) {
      for (let groupRoute of appRoute.groupRoutes) {
        if (groupRoute.children.length) {
          for (let child of groupRoute.children) {
            if (child.path == this.path) {
              this.location = child.routeName;
              break;
            }
          }
        } else {
          if (groupRoute.path == this.path) {
            this.location = groupRoute.routeName;
            break;
          }
        }
      }
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showbackground = this.router.url.toString() != '/main/dashboard';
        this.path = this.router.url.toString();
      }
    });
  }

  public toggleSidenav(): void {
    if (!this.canToggle) {
      this.showFiller = !this.showFiller
    }
  }

  public breadcrumbs(routeName: string, path: string): void {

    this.router.navigate([path])
    this.location = routeName;

  }

  public crumbClick(i: number): void {
    if (i == 1) this.router.navigate(['/main'])
  }

}
