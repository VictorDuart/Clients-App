import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ListClientsComponent } from './list-clients/list-clients.component';


@NgModule({
  declarations: [ClientsFormComponent, ListClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule
  ], exports: [
    ClientsFormComponent, 
    ListClientsComponent
  ]
})
export class ClientsModule { }
