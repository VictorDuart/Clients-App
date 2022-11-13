import { Injectable } from '@angular/core';
import { Client } from './clients/clients';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private http: HttpClient ) { }

  save(client : Client) : Observable<Client> { //Observable para obter a resposta da chamada
    return this.http.post<Client>('http://localhost:8080/api/clients', client);
  }

/*  getClient() : Observable<Client[]> {
    let client : Client = new Client();
    client.name = 'Victor';
    client.cpf = '08225024613'
    return null;
  }*/

  getClients() : Client[]{
    let client = new Client();
    client.id = 1;
    client.name = 'Victor';
    client.cadastreDate = '13/11/2022'
    client.cpf = '08225024613'
    return [client];
  }
}
