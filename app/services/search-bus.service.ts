import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusRoute } from '../models/bus-route';

@Injectable({
  providedIn: 'root'
})
export class SearchBusService {

  private baseUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  getBusList(from:any,to:any): Observable<BusRoute[]>{
    console.log("Service from: "+from);
    console.log("Service to: "+to);
    const params = new HttpParams()
   .set('from', from)
   .set('to', to);
 
    return this.http.get<BusRoute[]>(`${this.baseUrl}/searchbus`,{params});

    
  }
}
