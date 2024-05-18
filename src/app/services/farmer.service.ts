import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  constructor(private http: HttpClient) { }

  url = 'https://www.api-rest.somee.com/api/farmer';
  url2 = 'https://www.api-rest.somee.com/api/contactType';





  getContactTypes(): Observable<any> {
    return this.http.get<any>(this.url2);
  }

  getFarmers(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  createFarmer(farmer: any): Observable<any> {
    return this.http.post<any>(this.url, farmer);
  }

  UpdateFarmer(farmer: any): Observable<any> {
    return this.http.patch<any>(this.url, farmer);
  }
}
