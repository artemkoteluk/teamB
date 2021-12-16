import {RoutesInterface} from "./routes-inteface";

export let appRoutes: RoutesInterface[] = [
  {
    groupName: 'APPS',
    groupRoutes: [
      {
        path: '/main/dashboard',
        routeName: 'Dashboard',
        icon: 'dashboard',
        badge: 0,
        children: []
      },
      {
        path: '/main/table',
        routeName: 'All-In-One Table',
        icon: 'assignment',
        badge: 22,
        children: []
      },
      {
        path: '/main/calendar',
        routeName: 'Calendar',
        icon: 'date_range',
        badge: 0,
        children: []
      },
      {
        path: '/main/inbox',
        routeName: 'Inbox',
        icon: 'inbox',
        badge: 0,
        children: []
      },
      {
        path: '/main/chat',
        routeName: 'Chat',
        icon: 'chat',
        badge: 14,
        children: []
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
        children: []
      },
      {
        path: '',
        routeName: 'Forms',
        icon: 'description',
        children: [
          {
            path: '/main/form-elements',
            routeName: 'Form Elements',
            icon: 'Fe'
          },
          {
            path: '/main/form-wizard',
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
        children: []
      },
      {
        path: '/main/editor',
        routeName: 'WYSIWYG Editor',
        icon: 'format_shapes',
        badge: 0,
        children: []
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
        children: [
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
            path: '/forgot-password',
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
        children: [
          {
            path: '/main/simple',
            routeName: 'Simple',
            icon: 'Si'
          },
          {
            path: '/main/simple-tabbed',
            routeName: 'Simple Tabbed',
            icon: 'St'
          },
          {
            path: '/main/card',
            routeName: 'Card',
            icon: 'Ca'
          },
          {
            path: '/main/card-tabbed',
            routeName: 'Card Tabbed',
            icon: 'Ct'
          }
        ]
      },
      {
        path: '/coming-soon',
        routeName: 'Coming Soon',
        icon: 'watch_later',
        badge: 0,
        children: []
      },
      {
        path: '/main/blank',
        routeName: 'Blank',
        icon: 'picture_in_picture',
        badge: 0,
        children: []
      },
      {
        path: '',
        routeName: 'Maps',
        icon: 'map',
        badge: 3,
        children: [
          {
            path: '/main/google-map',
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
        children: []
      }
    ]
  },
];
