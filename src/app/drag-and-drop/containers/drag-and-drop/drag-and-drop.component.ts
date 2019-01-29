import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {

  items = ['Zero', 'One', 'Two', 'Three'];
  items2 = ['Zero', 'One', 'Two', 'Three'];
  items3 = ['Eleven'];

  onDrop(event: CdkDragDrop<string[]>) {
    console.log('onDrop: ', event);
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  addToList(event: CdkDragDrop<string[]>) {
    console.log('addToList: ', event);
    if (event.previousContainer === event.container) {
      console.log('moveItemInArray');
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('transferArrayItem');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }

  isAllowed() {
    return false;
  }

}
