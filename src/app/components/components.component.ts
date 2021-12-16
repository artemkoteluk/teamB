import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TitleInterface} from "./title-interface";
import {StateInterface} from "./state-interface";
import {
  AutocompleteSnippet,
  ButtonsSnippet,
  CardsSnippet,
  CheckboxSnippet,
  DialogsSnippet,
  GLTiles,
  GridListSnippet,
  InputSnippet,
  ListSnippet,
  MenuSnippet,
  ProgressBarSnippet,
  ProgressSpinnerSnippet,
  RadioSnippet, SliderSnippet, SlidToggleSnippet, SnackBarSnippet,
  states, TooltipSnippet
} from "./components-data";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  public dialogAnswer: string;
  public visible: boolean = false;
  public componentNames: string[] = [
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
  public favoriteSeason: string;
  public seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  public stateCtrl: FormControl = new FormControl();
  public filteredStates: Observable<StateInterface[]>;
  public states: StateInterface[] = states;
  public GLTiles: TitleInterface[] = GLTiles;
  public AutocompleteSnippet: string = AutocompleteSnippet;
  public ButtonsSnippet: string = ButtonsSnippet;
  public CardsSnippet: string = CardsSnippet;
  public CheckboxSnippet: string = CheckboxSnippet;
  public DialogsSnippet: string = DialogsSnippet;
  public GridListSnippet: string = GridListSnippet;
  public InputSnippet: string = InputSnippet;
  public ListSnippet: string = ListSnippet;
  public MenuSnippet: string = MenuSnippet;
  public ProgressBarSnippet: string = ProgressBarSnippet;
  public ProgressSpinnerSnippet: string = ProgressSpinnerSnippet;
  public RadioSnippet: string = RadioSnippet;
  public SliderSnippet: string = SliderSnippet;
  public SlidToggleSnippet: string = SlidToggleSnippet;
  public SnackBarSnippet: string = SnackBarSnippet;
  public TooltipSnippet: string = TooltipSnippet

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  ngOnInit(): void {
  }

  private _filterStates(value: string): StateInterface[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  public scroll(id): void {
    let el = document.getElementById(id);
    // console.log(el);
    el.scrollIntoView();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(ExampleDialog, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if (result)
        this.dialogAnswer = result;
      else this.dialogAnswer = 'No answer';
    });
  }

  public toggle(): void {
    this.visible = !this.visible;
  }

  public openSnackBar(): void {
    this._snackBar.open('I`m a notification!', 'CLOSE', {
      horizontalPosition: 'end',
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
    @Inject(MAT_DIALOG_DATA) public data: boolean,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close('No');
  }

  onYesClick(): void {
    this.dialogRef.close('Yes');
  }
}


