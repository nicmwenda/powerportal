import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error = {
    status: false,
    message: '',
  };
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginGoogle() {
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

  submit() {
    let credentials = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
    };
    if (this.form.valid) {
      this.authService
        .emailSignin(credentials)
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
