import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../model/ProductModel';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) {
  }

  public ngOnInit() {
    this.productsService.getProducts().subscribe((products: ProductModel[]) => {
      this.products = products;
    });
  }

}
