import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusRoute } from '../models/bus-route';

@Injectable({
  providedIn: 'root'
})
export class BusRouteService {

  private baseUrl = 'http://localhost:8080';
 
  constructor(private http: HttpClient) { }
 
  getRouteById(busId:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/busroute/${busId}`);
  }
 
  // tslint:disable-next-line:ban-types
  createRoute(bus: Object,busId:number,driverId:number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/busroutes/${busId}/${driverId}`,bus, { responseType: 'text' });
  }
 
  // tslint:disable-next-line:ban-types
  updateRoute(id:number,busId: number,driverId:number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/busroute/${id}/${busId}/${driverId}`, value);
  }
 
  deleteRoute(busId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/busroute/${busId}`, { responseType: 'text' });
  }
 
  getRoute(): Observable<any> {
    return this.http.get(`${this.baseUrl}/busroutes`);
  }
  
}
