import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/containers/products-list/products-list.component';
import { DragAndDropComponent } from './drag-and-drop/containers/drag-and-drop/drag-and-drop.component';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'drag-and-drop', component: DragAndDropComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
