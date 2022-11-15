import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceProvideFormComponent } from './service-provide-form/service-provide-form.component';
import { ServiceProvideListComponent } from './service-provide-list/service-provide-list.component';


const routes: Routes = [
  { path: 'service-provide-form', component: ServiceProvideFormComponent}, 
  { path: 'service-provide-list', component: ServiceProvideListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProvideRoutingModule { }
