import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/dashboard/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { Component } from '@angular/core';
import { GameMasterComponent } from './pages/dashboard/gameMaster/gameMaster.component';
import { PanelComponent } from './pages/dashboard/panel/panel.component';
import { LogrosComponent } from './pages/dashboard/gameMaster/logros/logros.component';
import { PartidasComponent } from './pages/dashboard/gameMaster/partidas/partidas.component';


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
    children: [
      {
        path: '',
        component: GameMasterComponent,
      },
      {
        path: 'GameMaster',
        component: GameMasterComponent,
        children: [
          {
            path: 'Logros',
            component: LogrosComponent,
          },
          {
            path: 'Partidas',
            component: PartidasComponent,
          }
        ]
      },
      {
        path: 'Panel',
        component: PanelComponent,
      }
    ]
  },

 
];
