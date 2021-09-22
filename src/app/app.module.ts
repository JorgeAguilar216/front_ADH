import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientFormComponent } from './clients/client-form/client-form.component';
import {NbThemeModule} from '@nebular/theme';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SalesComponent } from './sales/sales.component';
import { SalesFormComponent } from './sales/sales-form/sales-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFormComponent,
    ClientsComponent,
    ClientFormComponent,
    SalesComponent,
    SalesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NbThemeModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
