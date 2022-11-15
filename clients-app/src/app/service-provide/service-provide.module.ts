import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ServiceProvideRoutingModule } from './service-provide-routing.module';
import { ServiceProvideFormComponent } from './service-provide-form/service-provide-form.component';
import { ServiceProvideListComponent } from './service-provide-list/service-provide-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ServiceProvideFormComponent, ServiceProvideListComponent],
  imports: [
    CommonModule,
    ServiceProvideRoutingModule, 
    FormsModule, 
    RouterModule
  ], exports: [
    ServiceProvideFormComponent, 
    ServiceProvideListComponent
  ]
})

export class ServiceProvideModule { }
