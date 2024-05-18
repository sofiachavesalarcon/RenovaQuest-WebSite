import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  url = 'https://www.api-rest.somee.com/api/device';
  url2 = 'https://www.api-rest.somee.com/api/deviceType';
  url3 = 'https://www.api-rest.somee.com/api/farm';
  url4 = 'https://www.api-rest.somee.com/api/energyMeter';




  getDevices(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getDeviceTypes(): Observable<any> {
    return this.http.get<any>(this.url2);
  }

  getFarms(): Observable<any> {
    return this.http.get<any>(this.url3);
  }

  getEnergyMeters(): Observable<any> {
    return this.http.get<any>(this.url4);
  }

  createDevice(device: any): Observable<any> {
    return this.http.post(this.url, device);
  }

  UpdateDevice(device: any): Observable<any> {
    return this.http.patch<any>(this.url, device);
  }


}
