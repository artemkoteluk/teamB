import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  ComingSoonForm;
  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.ComingSoonForm = this.formBuilder.group({
      email: ['', [Validators.nullValidator]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.router.navigate(['main/dashboard'])
  }
}
