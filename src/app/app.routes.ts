import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/dashboard/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


export const routes: Routes = [
  {
    path: '', redirectTo: 'login' , pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  }
];
