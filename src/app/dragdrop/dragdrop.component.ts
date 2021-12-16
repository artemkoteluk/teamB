import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DragDropInterface} from "./datainterface";
import {done, todo} from "./dragdropdata";

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

  public todo: DragDropInterface[] = todo;

  public done: DragDropInterface[] = done;

  constructor() {
  }

  ngOnInit(): void {
  }


  public drop(event: CdkDragDrop<{ task: string, time: string }[]>): void {
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
