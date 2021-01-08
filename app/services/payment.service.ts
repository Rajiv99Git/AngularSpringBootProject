import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  makePayment(id:number,payment:Object) : Observable<Payment[]>{

    console.log("Booking ID from Service : ",id)
    return this.http.post<Payment[]>(`${this.baseUrl}/payments/${id}`,payment);
  }
}
