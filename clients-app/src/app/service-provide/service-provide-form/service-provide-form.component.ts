import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/clients';
import { ClientsService } from '../../clients.service'
import { serviceProvide } from '../serviceProvide';

@Component({
  selector: 'app-service-provide-form',
  templateUrl: './service-provide-form.component.html',
  styleUrls: ['./service-provide-form.component.css']
})
export class ServiceProvideFormComponent implements OnInit {

  clients: Client[]
  service: serviceProvide

  constructor(private clientService: ClientsService) {
    this.service = new serviceProvide();
   }

  ngOnInit(): void {
    this.clientService.getClients().subscribe( response => this.clients = response );
  }

  onSubmit(){
    console.log(this.service);
  }

}
