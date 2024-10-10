import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HabitoService } from '../../servicios/habito.service';
import { Habito } from '../../modelos/habito';
import { NgIf, NgFor } from '@angular/common';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-habito',
  templateUrl: './crear-habito.component.html',
  styleUrls: ['./crear-habito.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
})
export class CrearHabitoComponent {
  habito: Habito = { nombre: '', descripcion: '', creadoEn: new Date().toISOString(), usuarioId: undefined };
  usuarioNombre: string | undefined;
  habitos: Habito[] = [];

  constructor(
    private habitoService: HabitoService,
    private authService: AuthService,
    private router: Router
  ) {
    const token = localStorage.getItem('token');
    console.log('Token obtenido:', token);  // Para verificar si el token es válido
    if (token) {
      const payload = this.authService.getPayloadFromToken(token);
      this.usuarioNombre = payload?.sub;
      this.cargarHabitos(token); // Cargar los hábitos cuando el componente se inicia
    }
  }

  cargarHabitos(token: string): void {
    const userId = this.authService.getUserIdFromToken(token);
    console.log('User ID:', userId);  
    if (userId !== undefined) {
      this.habitoService.obtenerHabitosPorUsuario(userId, token).subscribe(
        (habitos) => {
          this.habitos = habitos;
        },
        (error) => {
          console.error('Error al cargar los hábitos:', error);
        }
      );
    }
  }

  crearHabito(): void {
    const token = localStorage.getItem('token');

    if (token) {
      const userId = this.authService.getUserIdFromToken(token);
      if (userId !== undefined) {
        this.habito.usuarioId = userId;
      }

      this.habitoService.crearHabito(this.habito, token).subscribe(
        (respuesta) => {
          alert('Hábito creado exitosamente');
          this.habitos.push(respuesta); // Añadir el hábito recién creado a la lista
          this.habito = { nombre: '', descripcion: '', creadoEn: new Date().toISOString(), usuarioId: undefined };
        },
        (error) => {
          console.error('Error al crear el hábito:', error);
          alert('Error al crear el hábito: ' + error.message);
        }
      );
    } else {
      console.error('Token no encontrado en el localStorage');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
