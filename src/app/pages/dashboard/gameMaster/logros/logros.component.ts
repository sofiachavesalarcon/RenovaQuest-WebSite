import { NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [NgFor, UpperCasePipe],
  templateUrl: './logros.component.html',
  styleUrl: './logros.component.css'
})
export class LogrosComponent {

  Logros = [
    {
      id: 1,
      name: 'rey de baterias',
      description: '! Has demostrado tu habilidad exeptional en la recoleccion de baterias, sigue asi !',
      progreso: 0,
      experiencia: 0,
    },
    {
      id: 2,
      name: 'Explorador',
      description: 'Descripcion del logro 2',
      progreso: 0,
      experiencia: 0,
    },
    {
      id: 3,
      name: 'Logro 3',
      description: 'Descripcion del logro 3',
      progreso: 0,
      experiencia: 0,
    },
    {
      id: 4,
      name: 'Logro 4',
      description: 'Descripcion del logro 4',
      progreso: 0,
      experiencia: 0,
    },
    {
      id: 5,
      name: 'Logro 5',
      description: 'Descripcion del logro 5',
      progreso: 0,
      experiencia: 0,
    }
  ];

}
