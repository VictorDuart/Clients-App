import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

//Para definir as rotas que são da aplicação, que são comuns às aplicações.
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: LayoutComponent, children: [
    { path : 'home', component: HomeComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
