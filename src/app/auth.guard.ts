import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      const payload = this.authService.getPayloadFromToken(token);
      // Aquí puedes verificar el payload según tu lógica
      return true; // O lo que necesites retornar
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
