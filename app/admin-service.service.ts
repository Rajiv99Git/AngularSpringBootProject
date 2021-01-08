import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';  
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})

export class AdminService {

  // Base URL  
  private  baseUrl = "http://localhost:8080";  
  router: any;
  
    
  
  
  constructor(private http: HttpClient) {
  }
 
  saveAdminDetails(adminDetail : Object) : Observable<any>  
  { 
      
      return this.http.post(`${this.baseUrl+"/ADMIN"}`,adminDetail);  
  }  
  
  login(adminDetail : Login) : Observable<any>  
  {  
      
      return this.http.put(`${this.baseUrl+"/login"}`,adminDetail, { responseType: 'text' });  
  }  
  
  logout()   
  {   
    // Remove the token from the localStorage.  
    localStorage.removeItem('token');  
  
    this.router.navigate(['']);  
  
  }  
  
  /* 
  * Check whether User is loggedIn or not. 
  */  
  
  isLoggedIn() {   
  
    // create an instance of JwtHelper class.  
    let jwtHelper = new JwtHelperService();  
  
    // get the token from the localStorage as we have to work on this token.  
    let token = localStorage.getItem('token');  
  
    // check whether if token have something or it is null.  
    if(!token)  
    {  
      return false;  
    }  
  
    // get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accepts a string value which is nothing but a token.  
  
    if(token)  
    {  
      let expirationDate = jwtHelper.getTokenExpirationDate(token);  
  
      // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.  
  
      let isExpired = jwtHelper.isTokenExpired(token);  
  
      return !isExpired;      
    }     
  }  
    
    
  getAdminDetail(adminId, value: any) : Observable<any>  
  {  
   
  
    return this.http.put(`${this.baseUrl}/${adminId}`, value);
  }  
    
}  

