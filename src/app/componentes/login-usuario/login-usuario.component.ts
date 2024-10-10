import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioLogin } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf]
})
export class LoginUsuarioComponent {
  usuario: UsuarioLogin = { correoElectronico: '', contrasena: '' };
  errorMensaje: string = ''; // Variable para mostrar el error

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login(): void {
    this.errorMensaje = ''; // Limpiar el mensaje de error antes de cada intento

    if (!this.usuario.correoElectronico || !this.usuario.contrasena) {
      this.errorMensaje = 'Por favor ingrese los datos';
      return;
    }

    this.usuarioService.iniciarSesion(this.usuario).subscribe(
      respuesta => {
        console.log(respuesta);
        // Guardar el token y el ID del usuario en localStorage
        localStorage.setItem('token', respuesta.token); // Guardar el token
        localStorage.setItem('usuarioId', respuesta.usuarioId); // Guardar el ID del usuario

        alert('Login exitoso');
        this.router.navigate(['/crear-habito']); // Redirigir a crear hábito
      },
      error => {
        this.errorMensaje = error.error.mensaje || 'Error en el sistema'; // Mostrar el mensaje de error desde el backend
        console.error(error);
      }
    );
  }
}
