import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverDetails } from '../driver-details';
import { DriverDetailsService } from '../driver-detailsservice';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  driver: DriverDetails=new DriverDetails();
  busId:number;
  submitted = false;

  constructor(private driverService: DriverDetailsService,
    private router: Router,private route: ActivatedRoute,) { }


    ngOnInit() {
      this.driver = new DriverDetails();
  
      // tslint:disable-next-line:no-string-literal
      this.busId = this.route.snapshot.params['id'];
      this.driverService.getDriverById(this.busId)
        .subscribe(data => {
          console.log(data)
          this.driver= data;
        }, error => console.log(error));
      }
  


  gotoList() {
    this.router.navigate(['/Driver']);
  }
}
