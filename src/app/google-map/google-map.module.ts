import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GoogleMapComponent} from "./google-map.component";

const routes: Routes = [
  {path: '', component: GoogleMapComponent}
]

@NgModule({
  declarations: [GoogleMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GoogleMapModule {
}
