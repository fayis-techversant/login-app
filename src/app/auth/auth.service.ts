import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { SignUpForm } from '../types/signUp';
import { log } from 'console';
import { LoginForm } from '../types/login';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  validCredentials: boolean = true;

  register(form: SignUpForm) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.router.navigate(['landing']);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  login(loginForm: LoginForm) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.router.navigate(['landing']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.validCredentials = false;
      });
  }
}
