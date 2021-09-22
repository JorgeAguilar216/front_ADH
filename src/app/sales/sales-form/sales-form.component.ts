import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { Sales } from 'src/app/shared/sales.model';
import { SalesService } from 'src/app/shared/sales.service';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styles: [
  ]
})
export class SalesFormComponent implements OnInit {

  valorunitario = 0;


  constructor(public service:SalesService,
    private toastr:ToastrService,
    ) {}

  ngOnInit(): void {
    this.service.ListProducts();
    this.service.ListClients();
  }

  onSubmit(form:NgForm){
    this.service.formData.valorT=this.service.formData.cantidad*this.valorunitario;
    this.service.formData.valorU=this.valorunitario;
    console.log(form);
    if(this.service.formData.salesId == 0)
      this.insertRecord(form);
    else
      this.updaterecord(form);
  }

  onChange(id:number){
    let indexposc = this.service.products.findIndex(x => x.productId == id);
    this.valorunitario = this.service.products[indexposc].valueU;
    console.log("Valor unitario = " + this.valorunitario);
  }

  insertRecord(form:NgForm){
    this.service.postSales().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Registro exitoso','Registro de Producto');
      },
      err => {console.log(err);}
    );
  }

  updaterecord(form:NgForm){
    this.service.putSales().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Actualizacion exitosa','Registro de Producto');
      },
      err => {console.log(err);}
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Sales();
  }
}
