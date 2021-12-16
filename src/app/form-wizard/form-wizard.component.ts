import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.css']
})
export class FormWizardComponent implements OnInit {
  public hide: boolean = true;
  public isLinear: boolean = true;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public verticalFirstFormGroup: FormGroup;
  public verticalSecondFormGroup: FormGroup;
  public verticalThirdFormGroup: FormGroup;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.intForms();
  }

  private intForms(): void {
    this.firstFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      eMail: ['', Validators.required],
      code: [''],
      phone: [''],

    });
    this.secondFormGroup = this._formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', Validators.required],

    });
    this.thirdFormGroup = this._formBuilder.group({
      confirm: ['', Validators.required]
    });

    this.verticalFirstFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      eMail: ['', Validators.required],
      code: [''],
      phone: [''],

    });
    this.verticalSecondFormGroup = this._formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', Validators.required],

    });
    this.verticalThirdFormGroup = this._formBuilder.group({
      confirm: ['', Validators.required]
    });
  }

  public openSnackBar(message: string): void {
    this._snackBar.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000
    });
  }
}
