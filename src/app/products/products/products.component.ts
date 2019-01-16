import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductModel } from '../../model/ProductModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: ProductModel[];

  constructor(private productsService: ProductsService) {
  }

  public ngOnInit() {
    this.productsService.getProducts().subscribe((products: ProductModel[]) => {
      this.products = products;
    });
  }
}
