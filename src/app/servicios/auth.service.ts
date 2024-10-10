import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getPayloadFromToken(token: string): any {
    try {
      const payload = token.split('.')[1]; // Obtén la parte del payload
      const decoded = JSON.parse(atob(payload)); // Decodifica la cadena Base64
      console.log('Payload decodificado:', decoded);  // Verificar que el payload contenga los datos esperados
      return decoded; // Retorna el payload completo
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }

  getUserIdFromToken(token: string): number | undefined {
    const payload = this.getPayloadFromToken(token);
    return payload ? payload.userId : undefined; // Cambiado de usuarioId a userId
  }


}
