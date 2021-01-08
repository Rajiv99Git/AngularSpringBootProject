import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PassangerService {

  private baseUrl = ' http://localhost:8080/passangers';

  constructor(private http: HttpClient) { }
  getPassanger(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
