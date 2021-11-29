import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todo = [
    {task:'Have fun at work',time:'next week'},
    {task:'Interview with Nikita',time:'next week'},
    {task:'Interview scheduled with Frank',time:'in 2 days'},
    {task:'Party at Rakesh\' house',time:'this weekend'},
  ];

  done = [
    {task:'Talk to Jennifer',time:'next week'},
    {task:'Meeting with Denis',time:'next week'},
    {task:'Meet up with the new coworkers',time:'in 2 days'},
    {task:'Get stuff done',time:'this weekend'},
  ];

  drop(event: CdkDragDrop<{task:string, time: string}[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
