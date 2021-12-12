import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftSidebarComponent} from "./left-sidebar.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [LeftSidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports:[LeftSidebarComponent]
})
export class LeftSidebarModule { }
