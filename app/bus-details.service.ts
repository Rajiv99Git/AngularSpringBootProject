import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class BusDetailsService {

  private baseUrl = ' http://localhost:8080/buses';

  constructor(private http: HttpClient) { }

  getBusById(busId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${busId}`);
  }

  // tslint:disable-next-line:ban-types
  createBus(bus: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bus);
  }

  // tslint:disable-next-line:ban-types
  updateBus(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBus(busId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${busId}`, { responseType: 'text' });
  }

  getBus(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
