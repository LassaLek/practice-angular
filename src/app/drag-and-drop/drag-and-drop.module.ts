import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from './containers/drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    MaterialModule
  ],
  declarations: [DragAndDropComponent],
  exports: [DragAndDropComponent]
})
export class DragAndDropModule {
}
