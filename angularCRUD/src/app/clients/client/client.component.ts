import { Component, OnInit } from '@angular/core';

import { ClientService } from '../shared/client.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {



  constructor(private clientService: ClientService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.clientService.selectedClient = {
      cpf: '',
      clientName: '',
      lastname: '',
      adress: '',
      number: null,
      neighborhood: '',
      cellPhone: '',
      phone: '',
      zipCode: ''
    }
  }

  onSubmit(form: NgForm) {
    this.clientService.postClient(form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.clientService.getClientList();
        this.toastr.success('New Record Added Successfully', 'Client Register')
      });
  }

  updateClient(form: NgForm) {
    this.clientService.putClient(form.value.cpf, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.clientService.getClientList();
        this.toastr.success('Record Updated Successfully', 'Client Register');
      });
  }

}


