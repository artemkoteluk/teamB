import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm;
  hide = true;
  remeberMe = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.router.navigate(['main/dashboard'])
  }
  navigateTo(path: string) {
    this.router.navigate([path])
  }
  rememberMeChanged(check: boolean) {
    console.log('Remember me: ' + check);
  }
}
