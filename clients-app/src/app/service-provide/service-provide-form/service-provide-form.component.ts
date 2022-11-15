import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/clients';
import { ClientsService } from '../../clients.service'
import { ServiceProvide } from '../serviceProvide';
import { ServiceProvidedService } from '../../service-provided.service';

@Component({
  selector: 'app-service-provide-form',
  templateUrl: './service-provide-form.component.html',
  styleUrls: ['./service-provide-form.component.css']
})
export class ServiceProvideFormComponent implements OnInit {

  clients: Client[]
  service: ServiceProvide

  constructor(private clientService: ClientsService, private serviceService: ServiceProvidedService) {
    this.service = new ServiceProvide();
   }

  ngOnInit(): void {
    this.clientService.getClients().subscribe( response => this.clients = response );
  }

  onSubmit(){
    this.serviceService.save(this.service).subscribe( response => console.log(response));
  }

}
