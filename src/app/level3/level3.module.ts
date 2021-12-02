import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { Level3Component } from './level3.component';

const routes: Routes = [
  {
    path: '',
    component: Level3Component,
  }
]

@NgModule({
  declarations: [Level3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class Level3Module { }
