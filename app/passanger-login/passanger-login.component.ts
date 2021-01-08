import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passanger-login',
  templateUrl: './passanger-login.component.html',
  styleUrls: ['./passanger-login.component.css']
})
export class PassangerLoginComponent implements OnInit {

  hide = true;
  data={
    name:"",
    email:"",
    password:""
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });
   
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  doSubmitForm(){
    
    if(this.data.email=="himanshu@gmail.com" && this.data.password=="Admin@123"){
      this.router.navigate(['adminInterface']);
    }
    else{
      alert(JSON.stringify("You are not Admin"));
    }
  }

}
