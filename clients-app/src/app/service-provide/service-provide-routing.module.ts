import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ServiceProvideFormComponent } from './service-provide-form/service-provide-form.component';
import { ServiceProvideListComponent } from './service-provide-list/service-provide-list.component';


const routes: Routes = [
  { path: 'service-provide', component: LayoutComponent, children: [
    { path: 'form', component: ServiceProvideFormComponent}, 
    { path: 'list', component: ServiceProvideListComponent},
    { path: '', redirectTo: '/service-provide/list', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProvideRoutingModule { }
