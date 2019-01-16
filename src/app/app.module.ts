import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/*MOCK API*/
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemProductService } from '../../mock/InMemoryProductService';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,

    /*MOCK API*/
    HttpClientInMemoryWebApiModule.forRoot(InMemProductService, { delay: 200 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
