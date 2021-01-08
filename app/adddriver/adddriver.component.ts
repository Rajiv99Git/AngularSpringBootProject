import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverDetails } from '../driver-details';
import { DriverDetailsService } from '../driver-detailsservice';

@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.css']
})
export class AdddriverComponent implements OnInit {
  driver:  DriverDetails=new DriverDetails();
  submitted = false;

  constructor(private driverService: DriverDetailsService,
    private router: Router) { }

  ngOnInit() {
  }

  newDriver(): void {
    this.submitted = false;
    this.driver = new DriverDetails();
  }

  save() {
    this.driverService.createDriver(this.driver)
      .subscribe(data => console.log(data), error => console.log(error));
    this.driver = new DriverDetails();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/bus']);
  }

}
