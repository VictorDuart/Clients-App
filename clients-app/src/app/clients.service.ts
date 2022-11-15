import { Injectable } from '@angular/core';
import { Client } from './clients/clients';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  apiURL: string = environment.apiURL; 

  constructor( private http: HttpClient ) { }

  save(client : Client) : Observable<Client> { //Observable para obter a resposta da chamada
    return this.http.post<Client>(`${this.apiURL}/api/clients`, client);
  }

  getClients() : Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiURL}/api/clients`);
  }

  getClientById(id: number) : Observable<Client>{
    return this.http.get<any>(`${this.apiURL}/api/clients/${id}`);
  }

  update(client : Client) : Observable<Client> { 
    return this.http.put<Client>(`${this.apiURL}/api/clients${client.id}`, client);
  }

  delete(client : Client) : Observable<any> { 
    return this.http.delete<any>(`${this.apiURL}/api/clients${client.id}`);
  }
}
