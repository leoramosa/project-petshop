import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
