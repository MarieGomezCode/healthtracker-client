import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Import necesario para las directivas estructurales
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar [(ngModel)]
import { UsuarioRegistro } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  standalone: true, // Define el componente como standalone
  imports: [FormsModule, NgIf] // Importa los módulos necesarios para las directivas y formularios
})
export class RegistroUsuarioComponent {
  usuario: UsuarioRegistro = { nombre: '', correoElectronico: '', contrasena: '' };

  constructor(private usuarioService: UsuarioService) {}

  registrar(): void {
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      respuesta => {
        console.log(respuesta);
        alert(`Mensaje: ${respuesta.mensaje}, ID: ${respuesta.id}`);
      },
      error => {
        console.error(error);
        alert('Error al registrar usuario');
      }
    );
  }

}
