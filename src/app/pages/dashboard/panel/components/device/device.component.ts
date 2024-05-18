import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DeviceService } from '../../../../../services/device.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-device',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './device.component.html',
  styleUrl: './device.component.css',
  providers: [DeviceService, HttpClientModule]
})
export class DeviceComponent implements OnInit {
  devices: any[] = [];
  deviceTypes: { id: number, name: string }[] = [];
  farms: { id: number, name: string }[] = [];
  energyMeters: { id: number, name: string }[] = [];

  actualizar: boolean = false;

  constructor(private http: DeviceService, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    // traemos los dispositivos
    this.http.getDevices().subscribe((response) => {
      this.devices = response;
    });

    // traemos los tipos de dispositivos
    this.http.getDeviceTypes().subscribe((response) => {
      response.forEach((element: any) => {
        this.deviceTypes.push({ id: element.deviceTypeId, name: element.typeDevice });
      });
    });

    // traemos las granjas
    this.http.getFarms().subscribe((response) => {
      response.forEach((element: any) => {
        this.farms.push({ id: element.farmId, name: element.farmName });
      });
    });

    // traemos los medidores de energia
    this.http.getEnergyMeters().subscribe((response) => {
      response.forEach((element: any) => {
        this.energyMeters.push({ id: element.energyMeterId, name: element.energyMeterBrand });
      });
      console.log(this.energyMeters);
    });
  }



  private readonly _formGroup = inject(FormBuilder);

  formGroup = this._formGroup.group({
    id: ['4444'],
    deviceBrand: ['', Validators.required],
    generationCapacity: ['', Validators.required],
    deviceTypeId: ['', Validators.required],
    farmId: ['', Validators.required],
    energyMeterId: ['', Validators.required],
  });


  createDevice() {

    if (this.formGroup.valid) {

      const deviceBrand = this.formGroup.value.deviceBrand;
      const generationCapacity = this.formGroup.value.generationCapacity;
      const deviceTypeId = this.formGroup.value.deviceTypeId;
      const farmId = this.formGroup.value.farmId;
      const energyMeterId = this.formGroup.value.energyMeterId;

      const newDevice = {
        deviceBrand: deviceBrand,
        generationCapacity: generationCapacity,
        deviceTypeId: Number(deviceTypeId),
        farmId: Number(farmId),
        energyMeterId: Number(energyMeterId),
      };
      console.log("nueva Dispocitivo:", newDevice);
      this.http.createDevice(newDevice).subscribe((response) => {
        this.devices.push(response);
        this.formGroup.reset();
        console.log("respuesta:", response);
      });

    }
  }

  update() {
    console.log(this.formGroup.value)

    this.http.UpdateDevice(this.formGroup.value).subscribe((response) => {

      this.devices = this.devices.map((device) => {
        if (device.deviceId === this.formGroup.value.id) {
          return this.formGroup.value;
        }
        return device;
      });
      this.formGroup.reset();
    })

    this.actualizar = false;
  }

  UpdateDevice(id: number) {
    // UpdateFarm() function is missing
    console.log('Updating Farm', id);
    const device = this.devices.find((device) => device.deviceId === id);
    device.id = id;
    console.log(device);

    this.formGroup.patchValue(device);
    this.actualizar = true;
  }

}
