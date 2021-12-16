import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CardComponent} from "./card.component";
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {path: '', component: CardComponent}]

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,

  ]
})
export class CardModule {
}
