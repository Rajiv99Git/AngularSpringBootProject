import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverDetails } from '../models/driver-details';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  hide = true;
  driverDetails:DriverDetails= new DriverDetails();

  constructor(private driverService: DriverService,
    private router:Router) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone:new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    dob:new FormControl('', Validators.required),
    address:new FormControl('', Validators.required),
    idnumber:new FormControl('', [Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    
    
    
   });
   
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  doSubmitForm(){
    this.driverService.createDriver(this.driverDetails).subscribe(
      data=>{
        console.log("Driver Data: "+data);
        this.router.navigate(['driverlist']);
      }
    );
    
  }

}
