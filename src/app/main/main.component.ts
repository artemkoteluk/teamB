import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showbackground = false;
  location:string='Oops! Location not found...';
  path=this.router.url.toString();

  appRoutes = [
    {
      groupName: 'APPS',
      groupRoutes: [
        {
          path: '/main/dashboard',
          routeName: 'Dashboard',
          icon: 'dashboard',
          badge: 0,
          children:<any>[]
        },
        {
          path: '/main/table',
          routeName: 'All-In-One Table',
          icon: 'assignment',
          badge: 22,
          children:<any>[]
        },
        {
          path: '/main/calendar',
          routeName: 'Calendar',
          icon: 'date_range',
          badge: 0,
          children:<any>[]
        },
        {
          path: '/main/inbox',
          routeName: 'Inbox',
          icon: 'inbox',
          badge: 0,
          children:<any>[]
        },
        {
          path: '/main/chat',
          routeName: 'Chat',
          icon: 'chat',
          badge: 14,
          children:<any>[]
        }
      ]
    },

    {
      groupName: 'USER INTERFACE',
      groupRoutes: [
        {
          path: '/main/components',
          routeName: 'Components',
          icon: 'layers',
          badge: 0,
          children:<any>[]
        },
        {
          path: '',
          routeName: 'Forms',
          icon: 'description',
          children:<any>[
            {
              path: '/main/forms/elements',
              routeName: 'Form Elements',
              icon: 'Fe'
            },
            {
              path: '/main/forms/wizard',
              routeName: 'Form Wizard',
              icon: 'Fw'
            }
          ]
        },
        {
          path: '/main/dragdrop',
          routeName: 'Drag & Drop',
          icon: 'mouse',
          badge: 0,
          children:<any>[]
        },
        {
          path: '/main/editor',
          routeName: 'WYSIWYG Editor',
          icon: 'format_shapes',
          badge: 0,
          children:<any>[]
        }
      ]
    },

    {
      groupName: 'PAGES',
      groupRoutes: [
        {
          path: '',
          routeName: 'Authentication',
          icon: 'vpn_key',
          badge: 0,
          children:<any>[
            {
              path: '/login',
              routeName: 'Login Page',
              icon: 'Lp'
            },
            {
              path: '/register',
              routeName: 'Register Page',
              icon: 'Rp'
            },
            {
              path: '',
              routeName: 'Forgot Password',
              icon: 'Fp'
            }
          ]
        },
        {
          path: '',
          routeName: 'Page Layouts',
          icon: 'view_compact',
          badge: 0,
          children:<any>[
            {
              path: '',
              routeName: 'Simple',
              icon: 'Si'
            },
            {
              path: '',
              routeName: 'Simple Tabbed',
              icon: 'St'
            },
            {
              path: '',
              routeName: 'Card',
              icon: 'Ca'
            },
            {
              path: '',
              routeName: 'Card Tabbed',
              icon: 'Ct'
            }
          ]
        },
        {
          path: '',
          routeName: 'Coming Soon',
          icon: 'watch_later',
          badge: 0,
          children:<any>[]
        },
        {
          path: '/main/blank',
          routeName: 'Blank',
          icon: 'picture_in_picture',
          badge: 0,
          children:<any>[]
        },
        {
          path: '',
          routeName: 'Maps',
          icon: 'map',
          badge: 3,
          children:<any>[
            {
              path: '/main/map',
              routeName: 'Google Maps',
              icon: 'Gm'
            },
          ]
        },
        {
          path: '/main/icons',
          routeName: 'Material Icons',
          icon: 'grade',
          badge: 0,
          children:<any>[]
        }
      ]
    },
  ];

  constructor(private router: Router) {
    for (let appRoute of this.appRoutes) {
      for (let groupRoute of appRoute.groupRoutes) {
        if (groupRoute.children.length){
          for (let child of groupRoute.children) {
            if (child.path==this.path){
              this.location=child.routeName;
              break;
            }
          }
        }
        else {
          if (groupRoute.path==this.path){
            this.location=groupRoute.routeName;
            break;
          }
        }
      }
    }

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
      {
        if(this.router.url.toString()=='/main/dashboard')this.showbackground=false;
        else this.showbackground=true;
        this.path=this.router.url.toString();
      }
    });
  }
  showFiller = true;
  canToggle: boolean = true;
    ngOnInit(): void {
  }


  toggleSidenav() {
    if(!this.canToggle){this.showFiller = !this.showFiller}
  }

  breadcrumbs(routeName: string, path: string) {

    this.router.navigate([path])
    this.location=routeName;

  }

  crumbClick(i: number) {
    if(i==1)this.router.navigate(['/main'])
  }
}
