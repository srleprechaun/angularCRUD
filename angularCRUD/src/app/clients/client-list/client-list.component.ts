import { Component, OnInit } from '@angular/core';

import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private clientService: ClientService, private toastr: ToastrService) { }

  ngOnInit() {
    this.clientService.getClientList();
  }

  showForEdit(cli: Client) {
    this.clientService.selectedClient = Object.assign({}, cli);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.clientService.deleteClient(id)
        .subscribe(x => {
          this.clientService.getClientList();
          this.toastr.warning("Delete Successfully", "Client Register");
        })
    }
  }
}
