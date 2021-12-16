import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SimpleTabbedComponent} from "./simple-tabbed.component";
import {MatTabsModule} from "@angular/material/tabs";

const routes: Routes = [
  {path: '', component: SimpleTabbedComponent}]

@NgModule({
  declarations: [SimpleTabbedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule

  ]
})
export class SimpleTabbedModule {
}
