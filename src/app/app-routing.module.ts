import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  { path: "clients"           , component: ClientsComponent },
  { path: "products"   , component: ProductsComponent },
  { path: ""   , component: SalesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

