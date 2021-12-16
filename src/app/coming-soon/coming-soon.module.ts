import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ComingSoonComponent} from './coming-soon.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonComponent,
    children: [
      {
        path: '**',
        redirectTo: 'coming-soon',
        pathMatch: 'full'
      }

    ]
  }
]

@NgModule({
  declarations: [ComingSoonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class ComingSoonModule {
}
