import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavLeftComponent} from "./sidenav-left.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {EditorComponent} from "../editor/editor.component";

const routes:Routes=[
  {path:'',component: SidenavLeftComponent}
]

@NgModule({
  declarations: [SidenavLeftComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class SidenavLeftModule { }
