import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DriverDetails } from '../driver-details';
import { DriverDetailsService } from '../driver-detailsservice';

@Component({
  selector: 'app-driverlist',
  templateUrl: './driverlist.component.html',
  styleUrls: ['./driverlist.component.css']
})
export class DriverlistComponent implements OnInit {

  
  driver:Observable<DriverDetails[]>;

  constructor(private driverService: DriverDetailsService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.driver = this.driverService.getDriver();
  }

  deleteDriver(id:number) {
    this.driverService.deleteDriver(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  DriverDetails(id:number){
    this.router.navigate(['Driverdetails', id]);
  }
  DriverUpdate(id: number){
    this.router.navigate(['Driverupdate', id]);
  }
  
  AddDriver(){
    this.router.navigate(['addDriver']);
  }
}
