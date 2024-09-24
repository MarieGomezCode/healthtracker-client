import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para el uso de ngModel
import { UsuarioLogin } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { NgIf } from '@angular/common'; // Necesario para condiciones en la plantilla
import { Router } from '@angular/router'; // Importa el router para la redirección

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css'],

  standalone: true, // Define este componente como standalone

  imports: [FormsModule, NgIf] // Añade los módulos necesarios
})

export class LoginUsuarioComponent {
  usuario: UsuarioLogin = { correoElectronico: '', contrasena: '' };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login(): void {
    this.usuarioService.iniciarSesion(this.usuario).subscribe(
      respuesta => {
        console.log(respuesta);
        alert('Login exitoso');
        this.router.navigate(['/crear-habito']); // Redirige a la página de creación de hábito
      },
      error => {
        if (error.status === 404) {
          alert('Usuario no existe');
        } else if (error.status === 401) {
          alert('Credenciales inválidas');
        } else {
          alert('Error en el sistema');
        }
        console.error(error);
      }
    );
  }
}
