import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";

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
        path:'icons',
        loadChildren: () => import('../icons/icons.module').then(m => m.IconsModule),
      },
      {
        path:'blank',
        loadChildren: () => import('../blank/blank.module').then(m => m.BlankModule),
      },
      {
        path:'level1/level2/level3',
        loadChildren: () => import('../level3/level3.module').then(m => m.Level3Module),
      },
      {
        path:'chat',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatModule),
      },
      {
        path:'calendar',
        loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarModule),
      },
      {
        path:'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path:'editor',
        loadChildren: () => import('../editor/editor.module').then(m => m.EditorModule),
      },
      {
        path:'google-map',
        loadChildren: () => import('../google-map/google-map.module').then(m => m.GoogleMapModule),
      },
      {
        path:'components',
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
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    MatExpansionModule,

  ]
})
export class MainModule {
}
