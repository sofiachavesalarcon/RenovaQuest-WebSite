import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnergyMeterService {

  constructor(private http: HttpClient) { }

  url = 'https://www.api-rest.somee.com/api/energyMeter';


  createEnergyMeter(energyMeter: any): Observable<any> {
    return this.http.post<any>(this.url, energyMeter);
  }

  getEnergyMeters(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  UpdateEnergyMeter(energyMeter: any): Observable<any> {
    console.log(energyMeter);
    return this.http.patch<any>(this.url, energyMeter);
  }
}
