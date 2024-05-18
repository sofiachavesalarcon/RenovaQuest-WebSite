import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnergyLogService {


  constructor(private http: HttpClient) { }

  url = 'https://www.api-rest.somee.com/api/energyLog';
  url2 = 'https://www.api-rest.somee.com/api/energyMeter';



  createEnergyLog(energyLog: any): Observable<any> {
    return this.http.post<any>(this.url, energyLog);
  }

  getEnergyLogs(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  UpdateEnergyLog(energyLog: any): Observable<any> {
    return this.http.patch<any>(this.url, energyLog);
  }

  getEnergyMeters(): Observable<any> {
    return this.http.get<any>(this.url2);
  }
}
