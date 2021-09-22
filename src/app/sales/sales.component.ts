import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../shared/client.model';
import { Product } from '../shared/product.model';
import { Sales } from '../shared/sales.model';
import { SalesService } from '../shared/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(public service:SalesService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.ListProducts();
    this.service.ListClients();
    this.service.refreshList();
  }

  populateForm(selectedSales:Sales){
    this.service.formData = Object.assign({},selectedSales);
    console.log("SALES ID="+this.service.formData.salesId);
  }

  // populateproduct(selectedProduct:Product){
  //   this.service.product = Object.assign({},selectedProduct);
  //   this.service.formData.productId = this.service.product.productId;
  //   console.log("PRODUCT ID="+this.service.formData.productId);
  // }

  // populateclient(selectedClient:Client){
  //   this.service.client = Object.assign({},selectedClient);
  //   this.service.formData.clientId = this.service.client.clientId;
  //   console.log("CLIENT ID="+this.service.formData.clientId);
  // }

  onDelete(id:number){
    if(confirm('Estas seguro de eliminar este registro?'))
    {
    this.service.deleteSales(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Registro eliminado",'Sales Register');
      },
      err =>{console.log(err)}
    )
    }
  }

  // onProduct(id:number){
  //   this.service.getbyid(id);
  // }
}
