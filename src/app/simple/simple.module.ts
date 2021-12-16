import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleComponent} from "./simple.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: SimpleComponent}]

@NgModule({
  declarations: [SimpleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SimpleModule {
}
