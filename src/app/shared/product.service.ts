import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  formData:Product = new Product();
  readonly baseURL = 'http://localhost:64920/api/Product';
  list : Product[];

  postProduct(){
    return this.http.post(this.baseURL,this.formData);
  }

  putProduct(){
    return this.http.put(`${this.baseURL}/${this.formData.productId}`,this.formData);
  }

  deleteProduct(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  async refreshList(){
    await this.http.get(this.baseURL)
    .toPromise()
    .then(
      res => {this.list = res as Product[];
      console.log(res)
      });
  }
}
