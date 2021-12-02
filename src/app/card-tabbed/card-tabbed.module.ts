import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTabbedComponent } from './card-tabbed.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";


const routes:Routes=[
  {path:'',component:CardTabbedComponent}]

@NgModule({
  declarations: [
    CardTabbedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatCardModule,

  ]
})
export class CardTabbedModule { }
