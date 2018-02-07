import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ListComponent} from './list/list.component';
import {AuthphoneComponent} from './authphone/authphone.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'authphone', component: AuthphoneComponent},
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
