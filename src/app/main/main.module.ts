import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";

const routes:Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path:'chat',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatModule),
      },
    ]
  }
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class MainModule { }
