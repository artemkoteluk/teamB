import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";

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
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
