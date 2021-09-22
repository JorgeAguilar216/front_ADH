import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Product } from './product.model';
import { Sales } from './sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { }

  formData:Sales = new Sales();
  product:Product = new Product();
  client:Client = new Client();
  
  readonly baseURL = 'http://localhost:64920/api/Sales';
  readonly baseURLPr = 'http://localhost:64920/api/Product';
  readonly baseURLCl = 'http://localhost:64920/api/Client';


  list:Sales[];
  products:Product[];
  clients:Client[];
  id:number=0;
  namesproducts: any[] = new Array<any>();
  namesclients: any[] = new Array<any>();

  postSales(){
    console.log("URL POST = " + this.baseURL);
    return this.http.post(this.baseURL,this.formData);
  }

  putSales(){
    console.log("URL PUT = " + this.baseURL);
    return this.http.put(`${this.baseURL}/${this.formData.salesId}`,this.formData);
  }

  deleteSales(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  async refreshList(){
    this.namesproducts=[];
    this.namesclients=[];
    await this.http.get(this.baseURL)
    .toPromise()
    .then(
      res => {this.list = res as Sales[];
      console.log(res)
      for(let element in this.list){
        let indexposc = this.products.findIndex(x => 
            x.productId == this.list[element].productId
          );
        // console.log("element -> "+ this.list[element].productId);
        // console.log("push -> "+ this.products[indexposc].name);
        // console.log("NAMESPRODUCTS ->"+ this.namesproducts);
        this.namesproducts.push(this.products[indexposc].name);
      }
      for(let element in this.list){
        let indexposc = this.clients.findIndex(x => 
            x.clientId == this.list[element].clientId
          );
        this.namesclients.push(this.clients[indexposc].name);
      }
      // console.log("NAMESPRODUCTS ->"+ this.namesproducts);
      });
  }
  
  async ListProducts(){
    await this.http.get(this.baseURLPr)
    .toPromise()
    .then(
      res => {this.products = res as Product[];
      console.log(res)
      });
  }

  async ListClients(){
    await this.http.get(this.baseURLCl)
    .toPromise()
    .then(
      res => {this.clients = res as Client[];
      console.log(res)
      });
  }

}
