import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  constructor(private http: HttpClient) { }

  url = 'http://www.api-rest.somee.com/api/farmType';

  url2 = 'http://www.api-rest.somee.com/api/farmer';

  url3 = 'http://www.api-rest.somee.com/api/farm';



  getFarmers(): Observable<any> {
    return this.http.get<any>(this.url2);
  }

  getFarmsTypes(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  createFarm(farm: any): Observable<any> {
    console.log("objeto: ", farm);
    return this.http.post<any>(this.url3, farm);
  }

  getFarms(): Observable<any> {
    return this.http.get<any>(this.url3);
  }

  getFarmById(id: number): Observable<any> {
    return this.http.get<any>(this.url3 + '/' + id);
  }

  UpdateFarm(farm: any): Observable<any> {
    return this.http.patch<any>(this.url3, farm);
  }


}
