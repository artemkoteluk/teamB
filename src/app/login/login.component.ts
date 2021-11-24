import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm;
  hide = true;
  remeberMe = false;
  constructor(private formBuilder: FormBuilder) {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    alert('Submit form.');
  }
  navigateTo(path: string) {
    alert('Navigate to: ' + path);
  }
  rememberMeChanged(check: boolean) {
    console.log('Remember me: ' + check);
  }
}
