import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceProvide } from './service-provide/serviceProvide';
import { environment } from '../environments/environment'
import { ServiceProvideSearch } from './service-provide/service-provide-list/serviceProvideSearch';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidedService {

  apiURL: string = environment.apiURL + "/api/service-provided";

  constructor(private http: HttpClient) { }

  save(serviceProvide: ServiceProvide): Observable<ServiceProvide>{
    return this.http.post<ServiceProvide>(this.apiURL, serviceProvide)
  }

  search(name: string, month: number) : Observable<ServiceProvideSearch[]>{
    
    const httpParams = new HttpParams().set("name", name).set("month", month.toString());

    const url = this.apiURL + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }
}
