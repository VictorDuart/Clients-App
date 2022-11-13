import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ListClientsComponent } from './list-clients/list-clients.component';


const routes: Routes = [
  {path: 'clients-form', component: ClientsFormComponent},
  {path: 'list-clients', component: ListClientsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
