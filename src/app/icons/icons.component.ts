import {Component, OnInit} from '@angular/core';
import {icons} from "./icons";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  public icons: string[] = icons;
  public search: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  public searchFilter(val: string): (i: string) => boolean {
    /* Compiler does see replace() but doesn't see replaceAll() for some reason */
    return (i: string) => i.includes(val.toLocaleLowerCase().trim()['replaceAll'](' ', '_')['replaceAll'](/__+/g, '_'));
  }
}
