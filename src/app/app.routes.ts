import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { GameMasterComponent } from './pages/dashboard/gameMaster/gameMaster.component';
import { PanelComponent } from './pages/dashboard/panel/panel.component';
import { LogrosComponent } from './pages/dashboard/gameMaster/logros/logros.component';
import { PartidasComponent } from './pages/dashboard/gameMaster/partidas/partidas.component';
import { authGuard } from './guards/auth.guard';
import { FarmComponent } from './pages/dashboard/panel/components/farm/farm.component';
import { EnergyMeterComponent } from './pages/dashboard/panel/components/energy-meter/energy-meter.component';
import { EnergyLogComponent } from './pages/dashboard/panel/components/energy-log/energy-log.component';
import { FarmerComponent } from './pages/dashboard/panel/components/farmer/farmer.component';
import { DeviceComponent } from './pages/dashboard/panel/components/device/device.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: GameMasterComponent,
        children: [
          {
            path: '',
            component: LogrosComponent,
          },
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
        children: [
          {
            path: '',
            component: FarmComponent,
          },
          {
            path: 'farmer',
            component: FarmerComponent,
          },
          {
            path: 'farm',
            component: FarmComponent,
          },
          {
            path: 'energyMeter',
            component: EnergyMeterComponent,
          },
          {
            path: 'energyLog',
            component: EnergyLogComponent,
          },
          {
            path: 'device',
            component: DeviceComponent,
          }
        ]
      },
      {
        path: 'GameMaster',
        component: GameMasterComponent,
        children: [
          {
            path: '',
            component: LogrosComponent,
          },
          {
            path: 'Logros',
            component: LogrosComponent,
          },
          {
            path: 'Partidas',
            component: PartidasComponent,
          }
        ]
      }
    ]
  },


];
