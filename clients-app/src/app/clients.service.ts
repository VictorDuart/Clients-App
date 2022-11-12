import { Injectable } from '@angular/core';
import { Client } from './clients/clients';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private http: HttpClient ) { }

  getClient() : Client {
    let client : Client = new Client();
    client.name = 'Victor';
    client.cpf = '08225024613'
    return client;
  }
}
