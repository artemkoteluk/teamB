import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm;
  hide = true;
  hide_repeat = true;
  acceptTOS = false;
  constructor(private formBuilder: FormBuilder) {
    this.RegisterForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_repeat: ['', [Validators.required]]
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
  acceptTOSChanged(check: boolean) {
    console.log('Accept TOS: ' + check);
  }

}
