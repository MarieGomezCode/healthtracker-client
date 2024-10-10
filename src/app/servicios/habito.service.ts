import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habito } from '../modelos/habito';

@Injectable({
  providedIn: 'root'
})
export class HabitoService {
  private apiUrl = 'http://localhost:8080/api/habitos';

  constructor(private http: HttpClient) {}

  crearHabito(habito: Habito, token?: string): Observable<any> {
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);  // Corregido: interpolación de strings
    }
    return this.http.post(`${this.apiUrl}/crear`, habito, { headers });  // Corregido: interpolación de strings
  }

  obtenerHabitosPorUsuario(userId: number, token: string): Observable<Habito[]> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });  // Corregido: interpolación de strings
    return this.http.get<Habito[]>(`${this.apiUrl}/usuario/${userId}`, { headers });  // Corregido: interpolación de strings
  }

}
