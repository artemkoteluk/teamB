import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotifierModule } from 'angular-notifier';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AreaChartModule, BarChartModule, LineChartModule, NumberCardModule, PieChartModule} from "@swimlane/ngx-charts";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

const routes: Routes=[
  {
    path:'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  // {
  //   path:'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  // },
  // {
  //   path:'register',
  //   loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
  //
  // },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'

  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig({
      // Custom options in here
    }),
    RouterModule.forRoot(routes),
    BrowserModule,
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
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
