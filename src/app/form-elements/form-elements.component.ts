import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.css']
})
export class FormElementsComponent implements OnInit {
  public hide: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
