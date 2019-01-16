import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products/products.service';
import { ProductModel } from './model/ProductModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-app';
}
