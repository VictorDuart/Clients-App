import { Injectable } from '@angular/core';
import { Client } from './clients/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getClient() : Client {
    let client : Client = new Client();
    client.name = 'Victor';
    client.cpf = '08225024613'
    return client;
  }
}
