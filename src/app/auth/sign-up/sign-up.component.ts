import { Component } from '@angular/core';
import { SignUpForm } from 'src/app/types/signUp';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private authService: AuthService) {}
  form: SignUpForm = {
    name: '',
    address: '',
    phone: '',
    dob: '',
    email: '',
    gender: '',
    eligibility: '',
    password: '',
    cpassword: '',
  };
  passwordEmpty: boolean = false;
  passwordMatch: boolean = true;
  phoneNumberValidation: boolean = true;
  isDisabled: boolean = true;

  checkPassword() {
    if (this.form.password.length == 0) {
      this.passwordMatch = false;
      return false;
    } else if (this.form.cpassword.length == 0) {
      this.passwordMatch = false;
      return false;
    } else if (this.form.cpassword != this.form.password) {
      this.passwordMatch = false;
      return false;
    } else {
      this.passwordMatch = true;
      return true;
    }
  }
  checkPhoneNumber() {
    if (isNaN(parseFloat(this.form.phone))) {
      this.phoneNumberValidation = false;
      return false;
    } else if (this.form.phone.length == 0 || this.form.phone.length != 10) {
      this.phoneNumberValidation = false;
      return false;
    } else {
      this.phoneNumberValidation = true;
      return true;
    }
  }

  formValidation() {
    const passwordValid = this.checkPassword();
    const phoneValid = this.checkPhoneNumber();

    if (passwordValid && phoneValid) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }
  signUp() {
    this.authService.register(this.form);
  }
}
