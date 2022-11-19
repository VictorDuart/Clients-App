import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients.service';
import { ServiceProvideModule } from './service-provide/service-provide.module';
import { ServiceProvidedService } from './service-provided.service';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule, 
    ClientsModule, 
    ServiceProvideModule, 
    FormsModule
  ],
  providers: [
    ClientsService, 
    ServiceProvidedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
