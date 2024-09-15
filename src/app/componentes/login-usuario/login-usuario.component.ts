import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para el uso de ngModel
import { UsuarioLogin } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { NgIf } from '@angular/common'; // Necesario para condiciones en la plantilla

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  standalone: true, // Define este componente como standalone
  imports: [FormsModule, NgIf] // Añade los módulos necesarios
})
export class LoginUsuarioComponent {
  usuario: UsuarioLogin = { correoElectronico: '', contrasena: '' };

  constructor(private usuarioService: UsuarioService) {}

  login(): void {
    this.usuarioService.iniciarSesion(this.usuario).subscribe(
      respuesta => alert('Login exitoso'),
      error => alert('Error en las credenciales')
    );
  }
}
