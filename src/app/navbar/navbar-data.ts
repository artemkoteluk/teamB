import {NotificationInterface} from "./notification-interface";
import {RouteGroupInterface} from "./routegroup-interface";

export let notifications: Array<NotificationInterface> = [
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
export let routeGroups: RouteGroupInterface[] = [
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
      {name: 'Form Wizard', route: '/main/form-wizard'},
      {name: 'WYSIWYG Editor', route: '/main/editor'},
      {name: 'Google Maps', route: '/main/google-map'},
      {name: 'Material Dialog', route: '/main/components'},
    ],
  },
]
