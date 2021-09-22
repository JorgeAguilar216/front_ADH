import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor(public service:ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedProduct:Product){
    this.service.formData = Object.assign({},selectedProduct);
    console.log(this.service.formData.name);
  }

  onDelete(id:number){
    if(confirm('Estas seguro de eliminar este registro?'))
    {
    this.service.deleteProduct(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Registro eliminado",'Product Register');
      },
      err =>{console.log(err)}
    )
    }
  }
}
