import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductModel } from '../../model/ProductModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() public listRef: any;

  public products: ProductModel[];

  constructor(private productsService: ProductsService) {
  }

  public ngOnInit() {
    this.productsService.getProducts().subscribe((products: ProductModel[]) => {
      this.products = products;
    });
  }
}
