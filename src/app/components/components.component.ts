import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";


export interface State {
  flag: string;
  name: string;
  population: string;
}

export interface DialogData {
  dialogAnswer: boolean;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  dialogAnswer: string;
  visible: boolean = false;
  componentNames: string[] = [
    'Autocomplete',
    'Buttons',
    'Cards',
    'Checkbox',
    'Dialog',
    'Grid List',
    'Input',
    'List',
    'Menu',
    'Progress Bar',
    'Progress Spinner',
    'Radio',
    'Slider',
    'Slide Toggle',
    'Snack Bar',
    'Tooltip',
  ];
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];
  GLTiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  AutocompleteSnippet='<mat-input-container>\n' +
    '  <mat-label>State</mat-label>\n' +
    '  <input type="text" matInput [matAutocomplete]="auto" [formControl]="stateCtrl">\n' +
    '  <mat-autocomplete #auto="matAutocomplete">\n' +
    '    <mat-option *ngFor="let option of options" [value]="option">\n' +
    '      {{ option }}\n' +
    '    </mat-option>\n' +
    '  </mat-autocomplete>\n' +
    '</mat-input-container>';

  ButtonsSnippet='<button mat-button>Button</button>\n' +
    '<button mat-button color="primary">Primary</button>\n' +
    '<button mat-button color="accent">Accent</button>\n' +
    '<button mat-button color="warn">Warn</button>\n' +
    '<button mat-button disabled="true">Disabled</button><button mat-raised-button>Button</button>\n' +
    '<button mat-raised-button color="primary">Primary</button>\n' +
    '<button mat-raised-button color="accent">Accent</button>\n' +
    '<button mat-raised-button color="warn">Warn</button>\n' +
    '<button mat-raised-button disabled="true">Disabled</button><button mat-icon-button><mat-icon>menu</mat-icon></button>\n' +
    '<button mat-icon-button color="primary"><mat-icon>grade</mat-icon></button>\n' +
    '<button mat-icon-button color="accent"><mat-icon>favorite</mat-icon></button>\n' +
    '<button mat-icon-button color="warn"><mat-icon>build</mat-icon></button>\n' +
    '<button mat-icon-button disabled="true"><mat-icon>lock</mat-icon></button><button mat-fab color="primary"><mat-icon>grade</mat-icon></button>\n' +
    '<button mat-fab color="accent"><mat-icon>favorite</mat-icon></button>\n' +
    '<button mat-fab color="warn"><mat-icon>build</mat-icon></button>\n' +
    '<button mat-fab disabled="true"><mat-icon>lock</mat-icon></button>\n' +
    '<button mat-mini-fab color="primary"><mat-icon>favorite</mat-icon></button>\n' +
    '<button mat-mini-fab color="accent"><mat-icon>thumb_up</mat-icon></button>\n' +
    '<button mat-mini-fab color="warn"><mat-icon>build</mat-icon></button>\n' +
    '<button mat-mini-fab disabled="true"><mat-icon>lock</mat-icon></button><mat-button-toggle-group>\n' +
    '  <mat-button-toggle value="left"><mat-icon>format_align_left</mat-icon></mat-button-toggle>\n' +
    '  <mat-button-toggle value="center"><mat-icon>format_align_center</mat-icon></mat-button-toggle>\n' +
    '  <mat-button-toggle value="right"><mat-icon>format_align_right</mat-icon></mat-button-toggle>\n' +
    '  <mat-button-toggle value="justify"><mat-icon>format_align_justify</mat-icon></mat-button-toggle>\n' +
    '</mat-button-toggle-group>\n' +
    '<mat-button-toggle-group multiple>\n' +
    '  <mat-button-toggle>Flour</mat-button-toggle>\n' +
    '  <mat-button-toggle>Eggs</mat-button-toggle>\n' +
    '  <mat-button-toggle>Sugar</mat-button-toggle>\n' +
    '  <mat-button-toggle>Milk</mat-button-toggle>\n' +
    '</mat-button-toggle-group>';

  CardsSnippet='<mat-card>\n' +
    '  <mat-card-header>\n' +
    '    <img mat-card-avatar src="assets/img/avatars/3.jpg">\n' +
    '    <mat-card-subtitle>\n' +
    '      Yesterday\n' +
    '    </mat-card-subtitle>\n' +
    '    <mat-card-title>Gerald Morris</mat-card-title>\n' +
    '  </mat-card-header>\n' +
    '  <img mat-card-image src="assets/img/backgrounds/1.jpg">\n' +
    '  <mat-card-content>\n' +
    '    <p>Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. </p>\n' +
    '  </mat-card-content>\n' +
    '  <mat-divider></mat-divider>\n' +
    '  <mat-card-actions>\n' +
    '    <div fxLayout="row">\n' +
    '      <button mat-icon-button>\n' +
    '        <mat-icon>share</mat-icon>\n' +
    '      </button>\n' +
    '      <button mat-icon-button>\n' +
    '        <mat-icon>favorite</mat-icon>\n' +
    '      </button>\n' +
    '      <span fxFlex></span>\n' +
    '      <button mat-button>\n' +
    '        More Info\n' +
    '      </button>\n' +
    '      <button mat-button>\n' +
    '        Save as\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  </mat-card-actions>\n' +
    '</mat-card>';

  CheckboxSnippet='<mat-checkbox>Checkbox</mat-checkbox>\n' +
    '<mat-checkbox color="primary" [checked]="true">Primary</mat-checkbox>\n' +
    '<mat-checkbox color="accent" [checked]="true">Accent</mat-checkbox>\n' +
    '<mat-checkbox color="warn" [checked]="true">Warn</mat-checkbox>\n' +
    '<mat-checkbox disabled [checked]="true">Disabled</mat-checkbox>\n' +
    '<mat-checkbox [indeterminate]="true">Indeterminate</mat-checkbox>';

  DialogsSnippet='<button mat-raised-button type="button" (click)="openDialog()" color="primary">Open Dialog</button>\n' +
    '<p *ngIf="result">You chose: {{ result }}</p>\n';

  GridListSnippet='<mat-grid-list cols="4" rowHeight="100px">\n' +
    '  <mat-grid-tile *ngFor="let tile of tiles" [colspan]="tile.cols" [rowspan]="tile.rows"\n' +
    '                  [style.background]="tile.color">\n' +
    '      {{tile.text}}\n' +
    '  </mat-grid-tile>\n' +
    '</mat-grid-list>';

  InputSnippet='<mat-form-field>\n' +
    '  <button *ngIf="!visible" type="button" mat-icon-button matPrefix (click)="show()">\n' +
    '    <mat-icon matPrefix>lock</mat-icon>\n' +
    '  </button>\n' +
    '  <button *ngIf="visible" type="button" mat-icon-button matPrefix (click)="hide()">\n' +
    '    <mat-icon matPrefix>lock_open</mat-icon>\n' +
    '  </button>\n' +
    '  <mat-label>Password</mat-label>\n' +
    '  <input matInput [type]="inputType">\n' +
    '  <button *ngIf="!visible" type="button" mat-icon-button matSuffix (click)="show()">\n' +
    '    <mat-icon>visibility</mat-icon>\n' +
    '  </button>\n' +
    '  <button *ngIf="visible" type="button" mat-icon-button matSuffix (click)="hide()">\n' +
    '    <mat-icon>visibility_off</mat-icon>\n' +
    '  </button>\n' +
    '</mat-form-field>';

  ListSnippet='<mat-list class="list mat-elevation-z1">\n' +
    '  <h3 mat-subheader>Contacts</h3>\n' +
    '  <mat-list-item>\n' +
    '    <img mat-list-avatar src="assets/img/avatars/1.jpg">\n' +
    '    <h3 matLine>John</h3>\n' +
    '    <p matLine>\n' +
    '      <span>Brunch?</span>\n' +
    '      <span class="subline">-- Did you want to go on Sunday? I was thinking</span>\n' +
    '    </p>\n' +
    '  </mat-list-item>\n' +
    '  <mat-list-item>\n' +
    '    <img mat-list-avatar src="assets/img/avatars/2.jpg">\n' +
    '    <h3 matLine>Peter</h3>\n' +
    '    <p matLine>\n' +
    '      <span>Summer BBQ</span>\n' +
    '      <span class="subline">-- Wish I could come, but I have some special</span>\n' +
    '    </p>\n' +
    '  </mat-list-item>\n' +
    '  <mat-list-item>\n' +
    '    <img mat-list-avatar src="assets/img/avatars/3.jpg">\n' +
    '    <h3 matLine>Nancy</h3>\n' +
    '    <p matLine>\n' +
    '      <span>Oui oui</span>\n' +
    '      <span class="subline">-- Have you booked the Paris trip?</span>\n' +
    '    </p>\n' +
    '  </mat-list-item>\n' +
    '  <mat-divider></mat-divider>\n' +
    '  <h3 mat-subheader>Other</h3>\n' +
    '  <mat-list-item>\n' +
    '    <img mat-list-avatar src="assets/img/avatars/4.jpg">\n' +
    '    <h3 matLine>Frank</h3>\n' +
    '    <p matLine>\n' +
    '      <span>Pretty decent!</span>\n' +
    '      <span class="subline">-- You look pretty... decent!</span>\n' +
    '    </p>\n' +
    '  </mat-list-item>\n' +
    '  <mat-list-item>\n' +
    '    <img mat-list-avatar src="assets/img/avatars/5.jpg">\n' +
    '    <h3 matLine>Donald</h3>\n' +
    '    <p matLine>\n' +
    '      <span>That\'s great!</span>\n' +
    '      <span class="subline">-- Great work mate!</span>\n' +
    '    </p>\n' +
    '  </mat-list-item>\n' +
    '</mat-list>';

  MenuSnippet='<button mat-icon-button [matMenuTriggerFor]="menu">\n' +
    '  <mat-icon>more_vert</mat-icon>\n' +
    '</button>\n' +
    '\n' +
    '<mat-menu #menu="matMenu">\n' +
    '  <button mat-menu-item>\n' +
    '    <mat-icon> dialpad </mat-icon>\n' +
    '    <span> Redial </span>\n' +
    '  </button>\n' +
    '  <button mat-menu-item disabled>\n' +
    '    <mat-icon> voicemail </mat-icon>\n' +
    '    <span> Check voicemail </span>\n' +
    '  </button>\n' +
    '  <button mat-menu-item>\n' +
    '    <mat-icon> notifications_off </mat-icon>\n' +
    '    <span> Disable alerts </span>\n' +
    '  </button>\n' +
    '</mat-menu>';

  ProgressBarSnippet='<mat-progress-bar mode="determinate" [value]="40"></mat-progress-bar>\n' +
    '<mat-progress-bar mode="indeterminate" color="primary"></mat-progress-bar>\n' +
    '<mat-progress-bar mode="buffer" color="accent"></mat-progress-bar>\n' +
    '<mat-progress-bar mode="query" color="warn"></mat-progress-bar>';

  ProgressSpinnerSnippet='<mat-progress-spinner mode="determinate" [value]="40"></mat-progress-spinner>\n' +
    '<mat-progress-spinner mode="indeterminate" color="accent"></mat-progress-spinner>';

  RadioSnippet='<mat-radio-group [(ngModel)]="favoriteSeason">\n' +
    '  <mat-radio-button class="radio" *ngFor="let season of seasons" [value]="season">\n' +
    '    {{ season }}\n' +
    '  </mat-radio-button>\n' +
    '</mat-radio-group>';

  SliderSnippet='<mat-slider min="1" max="10" thumbLabel tickInterval="1"></mat-slider>';

  SlidToggleSnippet='<mat-slide-toggle [checked]="true"></mat-slide-toggle>\n' +
    '<mat-slide-toggle color="primary" [checked]="true"></mat-slide-toggle>\n' +
    '<mat-slide-toggle color="accent" [checked]="true"></mat-slide-toggle>\n' +
    '<mat-slide-toggle color="warn" [checked]="true"></mat-slide-toggle>\n' +
    '<mat-slide-toggle disabled></mat-slide-toggle>';

  SnackBarSnippet='<button mat-raised-button (click)="openSnackbar()">TRIGGER SNACKBAR</button>';

  TooltipSnippet='<button mat-icon-button matTooltip="Favorite this">\n' +
    '  <mat-icon>favorite</mat-icon>\n' +
    '</button>';


  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
  }

  scroll(id) {
    let el=document.getElementById(id);
    // console.log(el);
    el.scrollIntoView();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ExampleDialog, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if(result)
      this.dialogAnswer = result;
      else this.dialogAnswer = 'No answer';
    });
  }

  toggle() {
    this.visible=!this.visible;
  }

  openSnackBar() {
    this._snackBar.open('I`m a notification!', 'CLOSE',{
      horizontalPosition:'end',
    });
  }
}

@Component({
  selector: 'example-dialog',
  templateUrl: 'example-dialog.html',
})
export class ExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<ExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close('No');
  }
  onYesClick(): void {
    this.dialogRef.close('Yes');
  }
}


