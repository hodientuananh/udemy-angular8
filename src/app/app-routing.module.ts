import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterFormComponent} from './register-form/register-form.component';

const routes: Routes = [
  {path: '', component: RegisterFormComponent},
  {path: 'register-form', component: RegisterFormComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
