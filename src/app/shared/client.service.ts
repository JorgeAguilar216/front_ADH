import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  formData:Client = new Client();
  readonly baseURL = 'http://localhost:64920/api/Client';
  list : Client[];

  postClient(){
    return this.http.post(this.baseURL,this.formData);
  }

  putClient(){
    return this.http.put(`${this.baseURL}/${this.formData.clientId}`,this.formData);
  }

  deleteClient(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  async refreshList(){
    await this.http.get(this.baseURL)
    .toPromise()
    .then(
      res => {this.list = res as Client[];
      console.log(res)
      });
    // console.log("TYPE OF =" + typeof(this.list)); 
    // console.log("PRUEBA LIST =" + this.list);
    // console.log("PRUEBA JSON=" + JSON.stringify(this.list));
    // console.log("PRUEBA LIST 0 =" + this.list[0].name);
    //this.list = JSON.stringify(this.list);
  }
}
