import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverDetails } from '../models/driver-details';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseUrl = 'http://localhost:8080/';
 
  constructor(private http: HttpClient) { }
 
  getDriverById(busId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/driver/${busId}`);
  }
 
  // tslint:disable-next-line:ban-types
  createDriver(driver: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/drivers`, driver);
  }
 
  // tslint:disable-next-line:ban-types
  updateDriver(busId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/driver/${busId}`, value);
  }
 
  deleteDriver(busId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/driver/${busId}`, { responseType: 'text' });
  }
 
  getDriver(): Observable<any> {
    return this.http.get(`${this.baseUrl}/drivers`);
  }
}
