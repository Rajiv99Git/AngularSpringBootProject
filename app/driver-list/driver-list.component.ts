import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DriverDetails } from '../models/driver-details';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  driver!: Observable<DriverDetails[]>;
 
  constructor(private driverService: DriverService,
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
 
  // DriverDetails(id:number){
  //   this.router.navigate(['Driverdetails', id]);
  // }
  DriverUpdate(id: number){
    this.router.navigate(['driverupdate', id]);
  }
  
  AddDriver(){
    this.router.navigate(['addDriver']);
  }

  home(){
    this.router.navigate(['adminInterface']);
  }
}
