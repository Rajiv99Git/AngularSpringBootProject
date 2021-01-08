import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { UpdateBooking } from '../models/update-booking';

@Injectable({
  providedIn: 'root'
})
export class BusBookingService {
  private baseUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  busBooking(routeId: any,passangerId: any,booking:Object): Observable<Booking[]>{

    console.log("RouteId: "+routeId ,"PassangerId: "+ passangerId +"Booking"+JSON.stringify(booking));
    const params = new HttpParams()
   .set('routeId', routeId)
   .set('passangerId', passangerId);

   const headers = { 'content-type': 'application/json'}  
   const body=JSON.stringify(booking);
   console.log("RouteId: "+routeId ,"PassangerId: "+ passangerId +"Booking"+JSON.stringify(booking));
   
    return this.http.post<Booking[]>(`${this.baseUrl}/bookings/${routeId}/${passangerId}`,booking);
  }

  
  busStatus(id: any,Updatebooking:Object): Observable<UpdateBooking[]>{

    console.log("id "+id, +"booking"+JSON.stringify(Updatebooking));
    const params = new HttpParams()
   .set('id',id)
   

   const headers = { 'content-type': 'application/json'}  
   const body=JSON.stringify(Updatebooking);
   console.log("id "+id+"Booking"+JSON.stringify(Updatebooking));
   
    return this.http.put<UpdateBooking[]>(`${this.baseUrl}/bookings/${id}`,Updatebooking);
  }
  getBooking(id:any) : Observable<Booking[]>{

    return this.http.get<Booking[]>(`${this.baseUrl}/booking/${id}`);
  }
  getBookinglist(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings`);
  }
}
