import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPasswordForm;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.ForgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.router.navigate(['main/dashboard'])
  }

}
