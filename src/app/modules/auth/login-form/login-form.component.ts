import {Component} from '@angular/core';
import { Router } from '@angular/router';
//
import {AuthenticationService} from './../../../services/auth';
import {VALIDATION_REGEX} from './../../../shared/constants';
import {LoginModel} from './../../../models/shared';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  userName = '';
  password = '';
  isSubmitting: boolean = false;

  constructor(private router: Router,
              private authService: AuthenticationService) {
  }

  // userNameValidator = (params) => {
  //   const value = params.value;
  //   if (VALIDATION_REGEX.email.test(value)) {
  //     return true;
  //   }
  //   if (VALIDATION_REGEX.phone.test(value)) {
  //     return true;
  //   }
  //   return false;
  // }

  onLoginClick(args) {
    if (!args.validationGroup.validate().isValid) {
      return;
    }

    const param = new LoginModel({username: this.userName, password: this.password});
    this.isSubmitting = true;
    this.authService.login(param).subscribe((data) => {
      this.isSubmitting = false;
      //
      this.authService.setCurrentUser(data);
      //
      this.router.navigate(['/home']);
    }, () => {
      this.isSubmitting = false;
    });
  }
}
