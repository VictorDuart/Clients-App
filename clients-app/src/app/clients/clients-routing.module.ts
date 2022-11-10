import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsFormComponent } from './clients-form/clients-form.component'


const routes: Routes = [
  {path: 'clients-form', component: ClientsFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
