import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotifierModule} from 'angular-notifier';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from './dashboard/dashboard.component';
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
import {QuillModule} from 'ngx-quill';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SidebarService} from "./right-sidebar/sidebar.service";
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {DatePipe} from "@angular/common";
import {SettingsSidebarComponent} from './settings-sidebar/settings-sidebar.component';
import {NotificationsSidebarComponent} from './notifications-sidebar/notifications-sidebar.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: 'forgot-password',
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
    SettingsSidebarComponent,
    NotificationsSidebarComponent
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
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,
  ],
  providers: [MatDialog, Overlay, MatSnackBar, SidebarService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
