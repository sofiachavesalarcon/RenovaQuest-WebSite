import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [FormsModule, NgIf, HttpClientModule, RouterLink, RouterOutlet],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'

})
export class PanelComponent {


  // inyectar el servicio para traer la data para las tablas
  constructor(private http: HttpClient) { }

  selectedEntity: string = 'Open this Select Entity';
  mostrarTabla: boolean = false;

  // variables para los datos de las tablas
  FarmData: any = [];
  FarmTypeData: any = [];
  FarmerData: any = [];
  ContactTypeData: any = [];
  DeviceData: any = [];
  DeviceTypeData: any = [];
  EnergyLogData: any = [];
  EnergyMeterData: any = [];

  Farm: boolean = false;
  FarmType: boolean = false;
  Farmer: boolean = false;
  ContactType: boolean = false;
  Device: boolean = false;
  DeviceType: boolean = false;
  EnergyLog: boolean = false;
  EnergyMeter: boolean = false;


  onEntityChange() {
    if (this.selectedEntity === '1') {

      this.http.get('https://www.api-rest.somee.com/api/farm').subscribe(data => {
        this.FarmData = data;
        console.log(this.FarmData);
        this.mostrarTabla = true;
      }
      );

    } else if (this.selectedEntity === '2') {

      this.http.get('https://www.api-rest.somee.com/api/farmType').subscribe(data => {
        this.FarmTypeData = data;
        console.log(this.FarmTypeData);
        this.mostrarTabla = true;
      });
    } else if (this.selectedEntity === '3') {

      this.http.get('https://www.api-rest.somee.com/api/contactType').subscribe(data => {
        this.ContactTypeData = data;
        console.log(this.ContactTypeData);
        this.mostrarTabla = true;
      });
    } else if (this.selectedEntity === '4') {

      this.http.get('https://www.api-rest.somee.com/api/device').subscribe(data => {
        this.DeviceData = data;
        console.log(this.DeviceData);
        this.mostrarTabla = true;
      });
    } else if (this.selectedEntity === '5') {


      this.http.get('https://www.api-rest.somee.com/api/deviceType').subscribe(data => {
        this.DeviceTypeData = data;
        console.log(this.DeviceTypeData);
        this.mostrarTabla = true;
      });
    } else if (this.selectedEntity === '6') {

      this.http.get('https://www.api-rest.somee.com/api/farmer').subscribe(data => {
        this.FarmerData = data;
        console.log(this.FarmerData);
        this.mostrarTabla = true;
      });
    } else if (this.selectedEntity === '7') {

      this.http.get('https://www.api-rest.somee.com/api/energyLog').subscribe(data => {
        this.EnergyLogData = data;
        console.log(this.EnergyLogData);
        this.mostrarTabla = true;
      });
    } else if (this.selectedEntity === '8') {

      this.http.get('https://www.api-rest.somee.com/api/energyMeter').subscribe(data => {
        this.EnergyMeterData = data;
        console.log(this.EnergyMeterData);
        this.mostrarTabla = true;
      });
    } else {
      this.mostrarTabla = false;
      console.log('Ningua entidad seleccionada');
    }
  }

  onEdit(id: number) {
    console.log('Editando', id);
  }
  onDelete(id: number) {
    console.log('Eliminando', id);
  }
  onCreate(entity: string) {
    if (entity == 'Farm') {
      console.log('Creando Farm');
      this.Farm = true;
    } else if (entity == 'FarmType') {
      console.log('Creando FarmType');
    } else if (entity == 'ContactType') {
      console.log('Creando ContactType');
    } else if (entity == 'Device') {
      console.log('Creando Device');
    } else if (entity == 'DeviceType') {
      console.log('Creando DeviceType');
    } else if (entity == 'Farmer') {
      console.log('Creando Farmer');
    } else if (entity == 'EnergyLog') {
      console.log('Creando EnergyLog');
    } else if (entity == 'EnergyMeter') {
      console.log('Creando EnergyMeter');
    } else {
      console.log('No se puede crear la entidad');
    }
  }
  onSave(entity: string) {
    if (entity == 'Farm') {
      console.log('Guardando Farm');
      this.Farm = false;
    } else if (entity == 'FarmType') {
      console.log('Guardando FarmType');
    } else if (entity == 'ContactType') {
      console.log('Guardando ContactType');
    } else if (entity == 'Device') {
      console.log('Guardando Device');
    } else if (entity == 'DeviceType') {
      console.log('Guardando DeviceType');
    } else if (entity == 'Farmer') {
      console.log('Guardando Farmer');
    } else if (entity == 'EnergyLog') {
      console.log('Guardando EnergyLog');
    } else if (entity == 'EnergyMeter') {
      console.log('Guardando EnergyMeter');
    } else {
      console.log('No se puede guardar la entidad');
    }
  }

}
