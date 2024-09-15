import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para formularios
import { HabitoService } from '../../servicios/habito.service';
import { Habito } from '../../modelos/habito';
import { NgIf } from '@angular/common'; // Para manejar condiciones en la vista

@Component({
  selector: 'app-crear-habito',
  templateUrl: './crear-habito.component.html',
  standalone: true, // Define el componente como standalone
  imports: [FormsModule, NgIf] // Añade los módulos necesarios
})
export class CrearHabitoComponent {
  habito: Habito = { nombre: '', descripcion: '', creadoEn: '', usuarioId: 0 };

  constructor(private habitoService: HabitoService) {}

  crearHabito(): void {
    this.habitoService.crearHabito(this.habito).subscribe(
      respuesta => alert('Hábito creado exitosamente'),
      error => alert('Error al crear el hábito')
    );
  }
}
