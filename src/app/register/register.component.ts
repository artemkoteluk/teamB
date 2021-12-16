import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public RegisterForm: FormGroup;
  public hide: boolean = true;
  public hide_repeat: boolean = true;
  public acceptTOS: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.RegisterForm = this.registerFormCreate();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.navigateTo('main/dashboard')
  }

  public navigateTo(path: string): void {
    this.router.navigate([path])
  }

  private registerFormCreate(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_repeat: ['', [Validators.required]]
    });
  }

  public acceptTOSChanged(check: boolean) {
  }

}
