import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = ' http://localhost:8080/bookings';

  constructor(private http: HttpClient) { }
  getBooking(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
