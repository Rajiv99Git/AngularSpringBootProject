import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BusrouteService {

  private baseUrl = 'http://localhost:8080/busroutes';

  constructor(private http: HttpClient) { }

  getRouteById(busId:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${busId}`);
  }

  // tslint:disable-next-line:ban-types
  createRoute(bus: Object,busId:number,driverId:number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${busId}/${driverId}`,bus);
  }

  // tslint:disable-next-line:ban-types
  updateRoute(id:number,busId: number,driverId:number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}/${busId}/${driverId}`, value);
  }

  deleteRoute(busId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${busId}`, { responseType: 'text' });
  }

  getRoute(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
