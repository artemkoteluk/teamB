import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {slideInOut} from "../right-sidebar/sidebar-animation";

export interface ThemeSettings {
  name: string;
  active: boolean;
  activeBtnColor: string;
  nonActiveBtnColor: string;
  iconColor: string;
}


@Component({
  selector: 'app-settings-sidebar',
  templateUrl: './settings-sidebar.component.html',
  styleUrls: ['./settings-sidebar.component.css'],
  animations: [slideInOut],
})
export class SettingsSidebarComponent implements OnInit {

  themeSettings: ThemeSettings[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  @Output() animationStateChanged = new EventEmitter<AnimationEvent>();

  animationState: 'void' | 'enter' | 'leave' = 'enter';

  onAnimationStart(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  onAnimationDone(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  startExitAnimation() {
    this.animationState = 'leave';
  }

  changeTheme(index: number) {
    for (let i = 0; i < this.themeSettings.length; i++) {
      if(i==index){
        this.themeSettings[i].active=true;
      }
      else{
        this.themeSettings[i].active=false;
      }
    }
  }
}
