import { AccountsComponent } from './accounts/accounts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanAuthenticationGuard } from './app.authguard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent, canActivate: 
  [CanAuthenticationGuard]},
  {path: 'about', component : AboutComponent, canActivate: 
  [CanAuthenticationGuard]},
  {path: 'accounts', component : AccountsComponent, canActivate: 
  [CanAuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAuthenticationGuard]
})
export class AppRoutingModule { }
