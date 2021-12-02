import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";


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
  constructor(private formBuilder: FormBuilder, private router: Router) {
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
    this.router.navigate(['main/dashboard'])
  }
  navigateTo(path: string) {
    this.router.navigate([path])
  }
  acceptTOSChanged(check: boolean) {
    console.log('Accept TOS: ' + check);
  }

}
