import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/ProductModel';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getProducts(): Observable<ProductModel[]> {
    return this.baseGetRequest<ProductModel[]>('api/products');
  }

}
