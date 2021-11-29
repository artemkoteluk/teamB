import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DragdropComponent} from "./dragdrop.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

const routes:Routes=[
  {path:'',component: DragdropComponent}
]

@NgModule({
  declarations: [DragdropComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class DragdropModule { }
