import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioRegistro } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf]
})
export class RegistroUsuarioComponent {
  usuario: UsuarioRegistro = { nombre: '', correoElectronico: '', contrasena: '' };

  // Expresión regular para validar el correo electrónico
  correoRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(private usuarioService: UsuarioService) {}

  validarFormulario(): boolean {
    if (!this.usuario.nombre || !this.usuario.correoElectronico || !this.usuario.contrasena) {
      alert('Por favor, complete todos los campos');
      return false;
    }

    if (this.usuario.nombre.length > 50) {
      alert('El nombre no puede exceder los 50 caracteres');
      return false;
    }

    if (!this.correoRegex.test(this.usuario.correoElectronico)) {
      alert('Por favor, introduzca un correo electrónico válido');
      return false;
    }

    return true;
  }

  registrar(): void {
    if (this.validarFormulario()) {
      this.usuarioService.registrarUsuario(this.usuario).subscribe(
        respuesta => {
          if (respuesta.mensaje === 'correo ya registrado') {
            alert('El correo ya está registrado');
          } else {
            alert(`Usuario registrado exitosamente, ID: ${respuesta.id}`);
          }
        },
        error => {
          // Aquí se maneja el error del servidor
          if (error.status === 400 && error.error.mensaje === 'correo ya registrado') {
            alert('El correo ya está registrado');
          } else {
            console.error(error);
            alert('Error al registrar usuario');
          }
        }
      );
    }
  }
}
