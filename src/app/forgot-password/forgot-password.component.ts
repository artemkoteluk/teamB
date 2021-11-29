import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPasswordForm;
  constructor(private formBuilder: FormBuilder) {
    this.ForgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    alert('Submit form.');
  }

}
