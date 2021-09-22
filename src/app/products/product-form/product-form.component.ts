import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: [
  ]
})
export class ProductFormComponent implements OnInit {

  constructor(public service:ProductService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.productId == 0)
      this.insertRecord(form);
    else
      this.updaterecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postProduct().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Registro exitoso','Registro de Producto');
      },
      err => {console.log(err);}
    );
  }

  updaterecord(form:NgForm){
    this.service.putProduct().subscribe(
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
    this.service.formData = new Product();
  }

}
