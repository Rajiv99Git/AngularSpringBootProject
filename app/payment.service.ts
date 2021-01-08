import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = ' http://localhost:8080/payments';

  constructor(private http: HttpClient) { }
  getPayment(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
