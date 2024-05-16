import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FarmService } from '../../../../../services/farm.service';
import { HttpClientModule } from '@angular/common/http';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-farm',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './farm.component.html',
  styleUrl: './farm.component.css',
  providers: [FarmService, HttpClientModule]
})
export class FarmComponent implements OnInit {

  farmTypes: { id: number, name: string }[] = [];
  farmers: { id: number, name: string }[] = [];
  farms: any[] = [];

  actualizar: boolean = false;

  constructor(private http: FarmService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // traemos los tipos de granjas
    this.http.getFarmsTypes().subscribe((response) => {
      response.forEach((element: any) => {
        this.farmTypes.push({ id: element.farmTypeId, name: element.typeFarm });
      });
    });

    // traemos los agricultores
    this.http.getFarmers().subscribe((response) => {
      response.forEach((element: any) => {
        this.farmers.push({ id: element.farmerId, name: element.name });
      });
    });

    // traemos las granjas
    this.http.getFarms().subscribe((response) => {
      this.farms = response;
    });

  }





  private readonly _formGroup = inject(FormBuilder);

  formGroup = this._formGroup.group({
    id: ['4444'],
    farmName: ['', Validators.required],
    location: ['', Validators.required],
    farmArea: ['', Validators.required],
    farmerId: ['', Validators.required],
    farmTypeId: ['', Validators.required],
    image: ['', Validators.required],
  });



  createFarm() {

    if (this.formGroup.valid) {

      const farmName = this.formGroup.value.farmName;
      const location = this.formGroup.value.location;
      const farmArea = this.formGroup.value.farmArea;
      const farmerId = this.formGroup.value.farmerId;
      const farmTypeId = this.formGroup.value.farmTypeId;
      const image = this.formGroup.value.image;

      const newFarm = {
        farmName: farmName,
        location: location,
        farmArea: farmArea,
        farmerId: Number(farmerId),
        farmTypeId: Number(farmTypeId),
        image: image
      };
      console.log("nueva granja:", newFarm);

      this.http.createFarm(newFarm).subscribe((response) => {
        this.farms.push(response);
        this.formGroup.reset();
        console.log("respuesta:", response);
      });
    }
  }
  update() {
    console.log(this.formGroup.value)
    this.http.UpdateFarm(this.formGroup.value).subscribe((response) => {
      this.farms = this.farms.map((farm) => {
        if (farm.farmId === this.formGroup.value.id) {
          return this.formGroup.value;
        }
        return farm;
      });
      this.formGroup.reset();
    })

    this.actualizar = false;
  }

  UpdateFarm(id: number) {
    // UpdateFarm() function is missing
    console.log('Updating Farm', id);
    const farm = this.farms.find((farm) => farm.farmId === id);
    farm.id = id;
    console.log("granja para actualizar:", farm);
    this.formGroup.patchValue(farm);
    this.actualizar = true;
  }

}
