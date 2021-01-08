import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DriverDetailsService {

  private baseUrl = 'http://localhost:8080/drivers';

  constructor(private http: HttpClient) { }

  getDriverById(busId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${busId}`);
  }

  // tslint:disable-next-line:ban-types
  createDriver(bus: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bus);
  }

  // tslint:disable-next-line:ban-types
  updateDriver(busId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${busId}`, value);
  }

  deleteDriver(busId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${busId}`, { responseType: 'text' });
  }

  getDriver(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
