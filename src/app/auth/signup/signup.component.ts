import { Component } from '@angular/core';
import { Utils } from '../../../shared/Utils';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../auth.scss']
})
export class SignupComponent {

   lastName: string;
   firstName: string;
   email: string;
   password: string;
   repeatPassword: string;
   adress: string;
   phone: string;

   lastNameVerify: boolean;
   firstNameVerify: boolean;
   emailVerify: boolean;
   passwordVerify: boolean;
   adressVerify: boolean;
   phoneVerify: boolean;
   repeatPasswordVerify: boolean;
   completeInputs: boolean;
   emailIsNotValide: boolean;
   passwordIsNotTheSame: boolean;
   invalidPassword: boolean;
   userExists: boolean;  

  constructor(
      private authService: AuthService,
      private router: Router,
  ) {}

  registerParent() {
      this.resetValidators();

      if (Utils.isNullOrEmpty(this.firstName)) {
          this.firstNameVerify = true;
      }

      if (Utils.isNullOrEmpty(this.lastName)) {
          this.lastNameVerify = true;
      }

      if (Utils.isNullOrEmpty(this.email)) {
          this.emailVerify = true;
      }

      if (Utils.isNullOrEmpty(this.password)) {
          this.passwordVerify = true;
      }

      if (Utils.isNullOrEmpty(this.repeatPassword)) {
          this.repeatPasswordVerify = true;
      }

      if (Utils.isNullOrEmpty(this.repeatPassword)) {
        this.adressVerify = true;
      }

      if (Utils.isNullOrEmpty(this.repeatPassword)) {
        this.phoneVerify = true;
      }

      if (this.firstNameVerify || this.lastNameVerify || this.emailVerify
          || this.passwordVerify || this.repeatPasswordVerify) {
              this.completeInputs = true;
              return;
      }
      if (!Utils.isEmailValide(this.email)) {
          this.emailVerify = true;
          this.emailIsNotValide = true;
          return;
      }

      if (this.password !== this.repeatPassword) {
          this.passwordVerify = true;
          this.repeatPasswordVerify = true;
          this.passwordIsNotTheSame = true;
          return;
      }

      if (this.password.length < 8) {
          this.passwordVerify = true;
          this.repeatPasswordVerify = true;
          this.invalidPassword = true;
      }

      const user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          adress: this.adress,
          phone: this.phone
      };

      this.authService.signup(user).subscribe(
          (token) => { this.resetFields(); this.router.navigate(['/login']); },
          (err) => this.userExists = true
      );
  }

  resetValidators() {
      this.firstNameVerify = false;
      this.lastNameVerify = false;
      this.emailVerify = false;
      this.passwordVerify = false;
      this.repeatPasswordVerify = false;
      this.adressVerify = false;
      this.phoneVerify = false;
      this.emailIsNotValide = false;
      this.passwordIsNotTheSame = false;
      this.completeInputs = false;
      this.invalidPassword = false;
  }

  resetFields() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.password = '';
      this.repeatPassword = '';
  }

}
