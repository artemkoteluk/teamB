import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NotifierModule} from 'angular-notifier';
import {RouterModule, Routes} from "@angular/router";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";

const routes: Routes = [
  {
    path: 'main',
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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NotifierModule.withConfig({
      // Custom options in here
    }),
    RouterModule.forRoot(routes),
  ],
  providers: [MatDialog, Overlay],
  bootstrap: [AppComponent]
})
export class AppModule {
}
