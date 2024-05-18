import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnergyLogService } from '../../../../../services/energy-log.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-energy-log',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './energy-log.component.html',
  styleUrl: './energy-log.component.css',
  providers: [EnergyLogService, HttpClientModule]
})
export class EnergyLogComponent implements OnInit {

  energyLogs: any = [];
  energyMeters: { id: number, name: string }[] = [];


  actualizar: boolean = false;

  constructor(private http: EnergyLogService, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.http.getEnergyLogs().subscribe((response) => {
      response.forEach((element: any) => {
        const fecha = element.readingDate.split('T')[0];
        element.readingDate = fecha;
      });
      this.energyLogs = response;
      console.log("response:", response);
    });

    //traemos los medidores de energia
    this.http.getEnergyMeters().subscribe((response) => {
      console.log("medidores de energia:", response);
      response.forEach((element: any) => {
        this.energyMeters.push({ id: element.energyMeterId, name: element.energyMeterBrand });
      });
    });
  }


  private readonly _formGroup = inject(FormBuilder);

  formGroup = this._formGroup.group({
    id: ['4444'],
    readingDate: ['', Validators.required],
    generatedEnergyKWH: ['', Validators.required],
    consumedEnergyKWH: ['', Validators.required],
    energyMeterId: ['', Validators.required],
  });


  createEnergyLog() {
    console.log(this.formGroup.value);

    if (this.formGroup.valid) {

      const readingDate = this.formGroup.value.readingDate;
      const generatedEnergyKWH = this.formGroup.value.generatedEnergyKWH;
      const consumedEnergyKWH = this.formGroup.value.consumedEnergyKWH;
      const energyMeterId = this.formGroup.value.energyMeterId;


      const newFarm = {
        readingDate: readingDate,
        generatedEnergyKWH: generatedEnergyKWH,
        consumedEnergyKWH: consumedEnergyKWH,
        energyMeterId: Number(energyMeterId),

      };
      console.log("nueva granja:", newFarm);

      this.http.createEnergyLog(newFarm).subscribe((response) => {
        response.readingDate = response.readingDate.split('T')[0];
        this.energyLogs.push(response);
        this.formGroup.reset();
        console.log("respuesta:", response);
      });
    }
  }

  update() {

    console.log(this.formGroup.value)
    this.http.UpdateEnergyLog(this.formGroup.value).subscribe((response) => {
      this.energyLogs = this.energyLogs.map((item: any) => {
        if (item.energyLogId === this.formGroup.value.id) {
          return this.formGroup.value;
        }
        return item;
      });
      this.formGroup.reset();
    })

    this.actualizar = false;
  }

  UpdateEnergyLog(id: number) {
    console.log('Updating Farm', id);
    const energyLog = this.energyLogs.find((item: any) => item.energyLogId === id);
    energyLog.id = id;
    const fecha = energyLog.readingDate.split('T')[0];
    energyLog.readingDate = fecha;
    console.log("granja para actualizar:", energyLog);
    this.formGroup.patchValue(energyLog);
    this.actualizar = true;
  }


}
