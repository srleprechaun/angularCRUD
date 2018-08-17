import { Component, OnInit } from '@angular/core';

import { ClientService } from './shared/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers : [ ClientService ]
})
export class ClientsComponent implements OnInit {

  constructor(private clientService : ClientService) { }

  ngOnInit() {
  }

}
