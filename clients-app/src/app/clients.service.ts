import { Injectable } from '@angular/core';
import { Client } from './clients/clients';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor( private http: HttpClient ) { }

  save(client : Client) : Observable<Client> { //Observable para obter a resposta da chamada
    return this.http.post<Client>('http://localhost:8080/api/clients', client);
  }

  getClients() : Observable<Client[]>{
    return this.http.get<Client[]>('http://localhost:8080/api/clients');
  }
}
