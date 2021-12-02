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
        path:'chat',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatModule),
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
        path:'form-wizard',
        loadChildren: () => import('../form-wizard/form-wizard.module').then(m => m.FormWizardModule),
      },
      {
        path:'form-elements',
        loadChildren: () => import('../form-elements/form-elements.module').then(m => m.FormElementsModule),
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
