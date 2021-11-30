import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EditorComponent} from "./editor.component";
import {QuillModule} from "ngx-quill";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes:Routes=[
  {path:'',component: EditorComponent}
]

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditorModule { }
