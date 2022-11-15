import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceProvide } from './service-provide/serviceProvide';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidedService {

  apiURL: string = environment.apiURL + "/api/service-provided";

  constructor(private hhtp: HttpClient) { }

  save(serviceProvide: ServiceProvide): Observable<ServiceProvide>{
    return this.hhtp.post<ServiceProvide>(this.apiURL, serviceProvide)
  }
}
