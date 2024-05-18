import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnergyLogService } from '../../../../../services/energy-log.service';
import { HttpClientModule } from '@angular/common/http';
import { EnergyMeterService } from '../../../../../services/energy-meter.service';

@Component({
  selector: 'app-energy-meter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './energy-meter.component.html',
  styleUrl: './energy-meter.component.css',
  providers: [EnergyMeterService, HttpClientModule]
})
export class EnergyMeterComponent implements OnInit {

  energyMeters: any = [];

  actualizar: boolean = false;


  private readonly _formGroup = inject(FormBuilder);

  formGroup = this._formGroup.group({
    id: ['4444'],
    energyMeterBrand: ['', Validators.required],
    instalationDate: ['', Validators.required],
  });


  constructor(private http: EnergyMeterService, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.http.getEnergyMeters().subscribe((response) => {
      this.energyMeters = response.map((item: any) => {
        item.instalationDate = item.instalationDate.split('T')[0];
        return item;
      });
      this.cd.detectChanges();
    });
  }


  createEnergyMeter() {
    console.log(this.formGroup.value);

    if (this.formGroup.valid) {

      const energyMeterBrand = this.formGroup.value.energyMeterBrand;
      const instalationDate = this.formGroup.value.instalationDate;



      const newFarm = {
        energyMeterBrand: energyMeterBrand,
        instalationDate: instalationDate,

      };
      console.log("nueva granja:", newFarm);

      this.http.createEnergyMeter(newFarm).subscribe((response) => {
        this.energyMeters.push(response);
        this.formGroup.reset();
        console.log("respuesta:", response);
      });
    }
  }

  update() {

    console.log(this.formGroup.value)
    this.http.UpdateEnergyMeter(this.formGroup.value).subscribe((response) => {
      this.energyMeters = this.energyMeters.map((item: any) => {
        if (item.energyMeterId === this.formGroup.value.id) {
          return this.formGroup.value;
        }
        return item;
      });
      this.formGroup.reset();
    })

    this.actualizar = false;
  }

  UpdateEnergyMeter(id: number) {
    console.log('Updating Farm', id);
    const energyLog = this.energyMeters.find((item: any) => item.energyMeterId === id);
    energyLog.id = id;
    const fecha = energyLog.instalationDate.split('T')[0];
    energyLog.instalationDate = fecha;
    console.log("granja para actualizar:", energyLog);
    this.formGroup.patchValue(energyLog);
    this.actualizar = true;
  }



}
