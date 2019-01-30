import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {

  items: string[] = ['Zero', 'One', 'Two', 'Three'];
  items2: string[] = ['Zero', 'One', 'Two', 'Three'];
  items3: string[] = ['Eleven'];


  public onDrop(event: CdkDragDrop<string[]>): void {
    console.log('onDrop: ', event);
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  public addToList(event: CdkDragDrop<string[]>): void {
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

  public isAllowed(): boolean {
    return false;
  }

}
