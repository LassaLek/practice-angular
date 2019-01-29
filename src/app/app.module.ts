import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemProductService } from '../../mock/InMemoryProductService';
import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { DragAndDropModule } from './drag-and-drop/drag-and-drop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,

    /*MOCK API*/
    HttpClientInMemoryWebApiModule.forRoot(InMemProductService, {delay: 200}),

    // Features
    ProductsModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
