import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { UsuarioRegistro, UsuarioLogin, Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: UsuarioRegistro): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }

  iniciarSesion(usuario: UsuarioLogin): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, usuario);
  }

  obtenerUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }
}
