import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotifierModule } from 'angular-notifier';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import {AreaChartModule, BarChartModule, LineChartModule, NumberCardModule, PieChartModule} from "@swimlane/ngx-charts";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";
import { QuillModule } from 'ngx-quill';
import {MatSnackBar} from "@angular/material/snack-bar";

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path:'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
  },
  {
    path:'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'

  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'

  }
]

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatDialogModule,
    NotifierModule.withConfig({
      // Custom options in here
    }),
    RouterModule.forRoot(routes, routerOptions),
    BarChartModule,
    MatCardModule,
    MatButtonModule,
    LineChartModule,
    NumberCardModule,
    PieChartModule,
    MatIconModule,
    AreaChartModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    QuillModule,
  ],
  providers: [MatDialog, Overlay, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule {
}
