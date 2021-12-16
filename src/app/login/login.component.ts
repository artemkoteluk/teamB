import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public LoginForm: FormGroup;
  public hide: boolean = true;
  public rememberMe: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.LoginForm = this.loginFormCreate();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.navigateTo('main/dashboard')
  }

  public navigateTo(path: string): void {
    this.router.navigate([path])
  }

  private loginFormCreate(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public rememberMeChanged(check: boolean): void {
  }
}
