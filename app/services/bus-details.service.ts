import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusDetailsService {

  private baseUrl = 'http://localhost:8080/buses';
  private baseUrl1 = 'http://localhost:8080/bus';

  constructor(private http: HttpClient) { }

  getBusById(busId: number): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${busId}`);
  }

  // tslint:disable-next-line:ban-types
  createBus(bus: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bus);
  }

  // tslint:disable-next-line:ban-types
  updateBus(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl1}/${id}`, value);
  }

  deleteBus(busId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl1}/${busId}`, { responseType: 'text' });
  }

  getBus(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
