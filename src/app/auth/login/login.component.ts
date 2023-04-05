import { Component } from '@angular/core';
import { LoginForm } from 'src/app/types/login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent {
  constructor(public authService: AuthService) {}

  loginForm: LoginForm = {
    email: '',
    password: '',
  };

  login() {
    this.authService.login(this.loginForm);
  }
}
