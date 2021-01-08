import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin-service.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: Login= new Login();
  submitted = false;
  ConfirmPassword: any;
   response:String;
  constructor(private adminService: AdminService,
    private router: Router) {}
  ngOnInit(): void {
  }
 
  form = new FormGroup({  
    email : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required)  
  });  
  
  Login(LoginInformation)  
  {  
      this.admin.email = this.Email.value;  
      this.admin.password = this.Password.value;  
  
      this.adminService.login(this.admin)
        .subscribe(data => {
          console.log(data);
          if(data ==='welcome admin')
          {
            this.router.navigate(['/header']);
          }
             
        }, 
         
      );  
  }  
  
  get Email(){  
      return this.form.get('email');  
  }  
  
  get Password(){  
      return this.form.get('password');  
  }  
  
}  

