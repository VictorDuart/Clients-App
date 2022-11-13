import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../clients';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients: Client[] = [];

  constructor(private service: ClientsService) {

   }

  ngOnInit(): void {
    this.service.getClients().subscribe( reponse => {
      this.clients = reponse
    });
  }

}
