export interface RoutesInterface {
  groupName: string;
  groupRoutes: {
    path: string,
    routeName: string,
    icon: string,
    badge?: number,
    children: {
      path: string,
      routeName: string,
      icon: string
    }[];
  }[];
}
