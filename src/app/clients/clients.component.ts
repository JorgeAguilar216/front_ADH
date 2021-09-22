import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../shared/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: [
  ]
})
export class ClientsComponent implements OnInit {

  constructor(public service:ClientService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedClient:Client){
    this.service.formData = Object.assign({},selectedClient);
    console.log(this.service.formData.name);
  }

  onDelete(id:number){
    if(confirm('Estas seguro de eliminar este registro?'))
    {
    this.service.deleteClient(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Registro eliminado",'Client Register');
      },
      err =>{console.log(err)}
    )
    }
  }
}
