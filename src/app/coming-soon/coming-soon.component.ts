import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  public ComingSoonForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.ComingSoonForm = this.comingSoonFormCreate();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.navigateTo('main/dashboard')
  }

  private comingSoonFormCreate(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_repeat: ['', [Validators.required]]
    });
  }

  public navigateTo(path: string): void {
    this.router.navigate([path])
  }
}
