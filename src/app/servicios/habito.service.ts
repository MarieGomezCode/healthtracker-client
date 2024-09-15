import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habito } from '../modelos/habito';

@Injectable({
  providedIn: 'root'
})
export class HabitoService {
  private apiUrl = 'http://localhost:8080/api/habitos';

  constructor(private http: HttpClient) {}

  crearHabito(habito: Habito): Observable<Habito> {
    return this.http.post<Habito>(`${this.apiUrl}/crear`, habito);
  }

  obtenerHabitosPorUsuario(usuarioId: number): Observable<Habito[]> {
    return this.http.get<Habito[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }
}
