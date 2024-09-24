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

  // Expresiones regulares para validaciones
  correoRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  contrasenaRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  nombreRegex: RegExp = /^[a-zA-Z]+$/; // Acepta solo un nombre sin espacios.

  constructor(private usuarioService: UsuarioService) {}

  validarFormulario(): boolean {
    // Verifica campos vacíos
    if (!this.usuario.nombre || !this.usuario.correoElectronico || !this.usuario.contrasena) {
      alert('Por favor, complete todos los campos');
      return false;
    }

    // Valida que solo haya un nombre
    if (!this.nombreRegex.test(this.usuario.nombre)) {
      alert('Ingrese solo un nombre sin espacios');
      return false;
    }

    // Verifica que el nombre no exceda 50 caracteres
    if (this.usuario.nombre.length > 50) {
      alert('El nombre no puede exceder los 50 caracteres');
      return false;
    }

    // Valida formato de correo electrónico
    if (!this.correoRegex.test(this.usuario.correoElectronico)) {
      alert('Por favor, introduzca un correo electrónico válido');
      return false;
    }

    // Valida la contraseña
    if (!this.contrasenaRegex.test(this.usuario.contrasena)) {
      alert('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.');
      return false;
    }

    // Eliminar espacios en los campos
    this.usuario.nombre = this.usuario.nombre.trim();
    this.usuario.correoElectronico = this.usuario.correoElectronico.trim();
    this.usuario.contrasena = this.usuario.contrasena.trim();

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
