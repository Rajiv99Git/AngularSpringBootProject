import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverDetails } from '../models/driver-details';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {

  id!:number;
  driver!:DriverDetails;
  submitted!:false;
  constructor(private route: ActivatedRoute,private router: Router,
    
    private driverService: DriverService) { }
 
    form = new FormGroup({
      name: new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      dob:new FormControl('', Validators.required),
      phone:new FormControl('', Validators.required),
      address:new FormControl('', Validators.required),
      idnumber:new FormControl('', Validators.required),
     });
  ngOnInit() {
    this.driver = new DriverDetails();
 
    // tslint:disable-next-line:no-string-literal
    this.id = this.route.snapshot.params['id'];
    this.driverService.getDriverById(this.id)
      .subscribe(data => {
        console.log(data)
        this.driver = data;
      }, error => console.log(error));
  }
 
  updateDriver() {
    this.driverService.updateDriver(this.id,this.driver)
      .subscribe(data => console.log(data), error => console.log(error));
    this.driver = new DriverDetails();
    this.gotoList();
  }
  DriverUpdate(id: number){
    this.router.navigate(['driverupdate',id]);
  }
 
  onSubmit() {
    this.updateDriver();
  }
 
  gotoList() {
    this.router.navigate(['/driverlist']);
  }

}
