import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';
import { CrearHabitoComponent } from './componentes/crear-habito/crear-habito.component';

export const routes: Routes = [
  { path: 'registro', component: RegistroUsuarioComponent }, // RegistroUsuarioComponent es standalone
  { path: 'login', component: LoginUsuarioComponent }, // LoginUsuarioComponent es standalone
  { path: 'crear-habito', component: CrearHabitoComponent }, // CrearHabitoComponent es standalone
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
