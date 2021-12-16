import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {NavbarModule} from "../navbar/navbar.module";
import {LeftSidebarModule} from "../left-sidebar/left-sidebar.module";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'table',
        loadChildren: () => import('../table/table.module').then(m => m.TableModule)
      },
      {
        path: 'dragdrop',
        loadChildren: () => import('../dragdrop/dragdrop.module').then(m => m.DragdropModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('../icons/icons.module').then(m => m.IconsModule),
      },
      {
        path: 'blank',
        loadChildren: () => import('../blank/blank.module').then(m => m.BlankModule),
      },
      {
        path: 'level1/level2/level3',
        loadChildren: () => import('../level3/level3.module').then(m => m.Level3Module),
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatModule),
      },
      {
        path: 'calendar',
        loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'editor',
        loadChildren: () => import('../editor/editor.module').then(m => m.EditorModule),
      },
      {
        path: 'form-wizard',
        loadChildren: () => import('../form-wizard/form-wizard.module').then(m => m.FormWizardModule),
      },
      {
        path: 'form-elements',
        loadChildren: () => import('../form-elements/form-elements.module').then(m => m.FormElementsModule),
      },
      {
        path: 'google-map',
        loadChildren: () => import('../google-map/google-map.module').then(m => m.GoogleMapModule),
      },
      {
        path: 'simple',
        loadChildren: () => import('../simple/simple.module').then(m => m.SimpleModule),
      },
      {
        path: 'simple-tabbed',
        loadChildren: () => import('../simple-tabbed/simple-tabbed.module').then(m => m.SimpleTabbedModule),
      },
      {
        path: 'card',
        loadChildren: () => import('../card/card.module').then(m => m.CardModule),
      },
      {
        path: 'card-tabbed',
        loadChildren: () => import('../card-tabbed/card-tabbed.module').then(m => m.CardTabbedModule),
      },
      {
        path: 'components',
        loadChildren: () => import('../components/components.module').then(m => m.ComponentsModule),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    ]
  }
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    LeftSidebarModule,
  ]
})
export class MainModule {
}
