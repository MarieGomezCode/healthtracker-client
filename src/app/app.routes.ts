import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';
import { CrearHabitoComponent } from './componentes/crear-habito/crear-habito.component';

import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'crear-habito', component: CrearHabitoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
