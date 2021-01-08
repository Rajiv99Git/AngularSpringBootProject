import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PassangerDetails } from '../models/passanger-details';
import { PassangerRegistrationComponent } from '../passanger-registration/passanger-registration.component';

@Injectable({
  providedIn: 'root'
})
export class PassengerRegistrationService {

  private baseUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }
  
  passangerRegistration(passanger:PassangerDetails):Observable<PassangerDetails[]>{

    return this.http.post<PassangerDetails[]>(`${this.baseUrl}/passangers/`,passanger);
  }
}
