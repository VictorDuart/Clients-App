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

  getClientById(id: number) : Observable<Client>{
    return this.http.get<any>(`http://localhost:8080/api/clients/${id}`);
  }

  update(client : Client) : Observable<Client> { 
    return this.http.put<Client>(`http://localhost:8080/api/clients/${client.id}`, client);
  }

  delete(client : Client) : Observable<any> { 
    return this.http.delete<any>(`http://localhost:8080/api/clients/${client.id}`);
  }
}
