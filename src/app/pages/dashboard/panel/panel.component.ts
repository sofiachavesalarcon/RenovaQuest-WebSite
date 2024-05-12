import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'

})
export class PanelComponent {


  // inyectar el servicio para traer la data para las tablas
  constructor() { }

  selectedEntity: string = 'Open this Select Entity';
  mostrarTabla: boolean = false;

  onEntityChange() {
    if(this.selectedEntity === '1') {
      this.mostrarTabla = true;
      console.log('Entity 1');
    } else if(this.selectedEntity === '2') {
      this.mostrarTabla = true;
      console.log('Entity 2');
    }else if(this.selectedEntity === '3') {
      this.mostrarTabla = true;
      console.log('Entity 3');
    }else if(this.selectedEntity === '4') {
      this.mostrarTabla = true;
      console.log('Entity 4');
    }else if(this.selectedEntity === '5') {
      this.mostrarTabla = true;
      console.log('Entity 5');
    }else if(this.selectedEntity === '6') {
      this.mostrarTabla = true;
      console.log('Entity 6');
    }else if(this.selectedEntity === '7') {
      this.mostrarTabla = true;
      console.log('Entity 7');
    }else if(this.selectedEntity === '8') {
      this.mostrarTabla = true;
      console.log('Entity 8');
    }else{
      this.mostrarTabla = false;
      console.log('Ningua entidad seleccionada');
    }
  }


}
