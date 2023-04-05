import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'signup', component:SignUpComponent },
  { path:'landing', component:LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
