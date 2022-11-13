import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Client } from '../clients';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client: Client;
  success: boolean = false;
  errors: String[];

  constructor( 
    private service: ClientsService,
    private router: Router
    ) { 
    this.client = new Client();
  }

  ngOnInit(): void {
  }

  
  backFilterPage(){
    this.router.navigate(['/list-clients'])
  }

  onSubmit(){
    this.service.save(this.client).subscribe( response => {
      this.success = true;
      this.errors = null;
      this.client = response;
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
      this.success = false;
    }
    )
  }

}
