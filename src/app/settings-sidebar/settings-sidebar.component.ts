import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {slideInOut} from "../right-sidebar/sidebar-animation";
import {ThemeInterface} from "./theme-interface";


@Component({
  selector: 'app-settings-sidebar',
  templateUrl: './settings-sidebar.component.html',
  styleUrls: ['./settings-sidebar.component.css'],
  animations: [slideInOut],
})
export class SettingsSidebarComponent implements OnInit {

 public themeSettings: ThemeInterface[] = [
    {
      name: 'Default',
      active: true,
      activeBtnColor: '#283144',
      nonActiveBtnColor: 'white',
      iconColor: 'white',
    },
    {
      name: 'Light',
      active: false,
      activeBtnColor: 'white',
      nonActiveBtnColor: 'white',
      iconColor: 'black',
    },
    {
      name: 'Dark',
      active: false,
      activeBtnColor: '#303030',
      nonActiveBtnColor: '#303030',
      iconColor: 'white',
    },
    {
      name: 'Flat',
      active: false,
      activeBtnColor: 'white',
      nonActiveBtnColor: 'white',
      iconColor: 'black',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() animationStateChanged = new EventEmitter<AnimationEvent>();

  animationState: 'void' | 'enter' | 'leave' = 'enter';

  public onAnimationStart(event: AnimationEvent): void {
    this.animationStateChanged.emit(event);
  }

  public onAnimationDone(event: AnimationEvent): void {
    this.animationStateChanged.emit(event);
  }

  public startExitAnimation(): void {
    this.animationState = 'leave';
  }

  public changeTheme(index: number): void {
    for (let i = 0; i < this.themeSettings.length; i++) {
      if (i == index) {
        this.themeSettings[i].active = true;
      } else {
        this.themeSettings[i].active = false;
      }
    }
  }
}
