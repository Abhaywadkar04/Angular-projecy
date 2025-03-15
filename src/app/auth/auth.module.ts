import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/auth/login/login.component';
import { RegistrationComponent } from './component/auth/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [provideHttpClient(),
    AuthService
  ],
})
export class AuthModule { }
