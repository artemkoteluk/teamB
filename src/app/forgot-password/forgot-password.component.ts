import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public ForgotPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.ForgotPasswordForm = this.forgotPasswordFormCreate()
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.navigateTo('main/dashboard')
  }

  public navigateTo(path: string): void {
    this.router.navigate([path])
  }

  private forgotPasswordFormCreate(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required]]
    });
  }

}
