import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients.service';
import { ServiceProvideModule } from './service-provide/service-provide.module';
import { ServiceProvidedService } from './service-provided.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule, 
    ClientsModule, 
    ServiceProvideModule
  ],
  providers: [
    ClientsService, 
    ServiceProvidedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
