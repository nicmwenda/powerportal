import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error = {
    status: false,
    message: '',
  };

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {}

  registerGoogle() {
    this.authService
      .googleSignin()
      .then((success) => {
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.error = {
          status: true,
          message: err.message,
        };

        console.log(err.message);
      });
  }

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordconfirm: new FormControl('', Validators.required),
  });

  submit() {
    console.log('submitting');
    let credentials = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      passwordconfirm: this.form.controls.passwordconfirm.value,
      username: this.form.controls.username.value,
    };

    if (credentials.password !== credentials.passwordconfirm) {
      this.error = {
        status: true,
        message: 'Passwords do not match',
      };
    } else {
      this.error = {
        status: false,
        message: '',
      };
    }

    if (this.form.valid && !this.error.status) {
      this.authService
        .emailRegister(credentials)
        .then((result) => {
          console.log(result);
          this.router.navigate(['/dashboard']);
        })
        .catch((err) => {
          this.error = {
            status: true,
            message: err.message,
          };

          console.log(err.message);
        });
    }
  }
}
