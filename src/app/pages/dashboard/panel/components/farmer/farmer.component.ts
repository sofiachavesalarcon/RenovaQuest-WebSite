import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FarmerService } from '../../../../../services/farmer.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-farmer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './farmer.component.html',
  styleUrl: './farmer.component.css',
  providers: [FarmerService, HttpClientModule]
})
export class FarmerComponent implements OnInit {

  contactTypes: { id: number, name: string }[] = [];
  farmers: any[] = [];

  actualizar: boolean = false;


  private readonly _formGroup = inject(FormBuilder);

  formGroup = this._formGroup.group({
    id: ['4444'],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    contactTypeId: ['', Validators.required],
    contact: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(private http: FarmerService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // traemos los tipos de contacto
    this.http.getContactTypes().subscribe((response) => {
      response.forEach((element: any) => {
        this.contactTypes.push({ id: element.contactTypeId, name: element.typeContact });
      });

      console.log(this.contactTypes);
    });

    // traemos los agricultores
    this.http.getFarmers().subscribe((response) => {
      this.farmers = response;

      console.log(this.farmers);
    });

  }

  createFarmer() {

    if (this.formGroup.valid) {

      const name = this.formGroup.value.name;
      const lastName = this.formGroup.value.lastName;
      const contactTypeId = this.formGroup.value.contactTypeId;
      const contact = this.formGroup.value.contact;
      const address = this.formGroup.value.address;

      const newFarmer = {
        name: name,
        lastName: lastName,
        contactTypeId: Number(contactTypeId),
        contact: contact,
        address: address
      };
      console.log("nueva granja:", newFarmer);

      this.http.createFarmer(newFarmer).subscribe((response) => {
        this.farmers.push(response);
        this.formGroup.reset();
        console.log("respuesta:", response);
      });
    }
  }



  update() {
    console.log(this.formGroup.value)
    this.http.UpdateFarmer(this.formGroup.value).subscribe((response) => {
      this.farmers = this.farmers.map((farmer) => {
        if (farmer.farmerId === this.formGroup.value.id) {
          return this.formGroup.value;
        }
        return farmer;
      });
      this.formGroup.reset();
    })

    this.actualizar = false;
  }


  UpdateFarmer(id: number) {
    console.log('Updating Farm', id);
    const farmer = this.farmers.find((farmer) => farmer.farmerId === id);
    farmer.id = id;
    console.log("granja para actualizar:", farmer);
    this.formGroup.patchValue(farmer);
    this.actualizar = true;
  }
}
