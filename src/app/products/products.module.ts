import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { ProductsListComponent } from './containers/products-list/products-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ItemComponent, ProductsListComponent],
  exports: [ProductsListComponent]
})
export class ProductsModule {
}
