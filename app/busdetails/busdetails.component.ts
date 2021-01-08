import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDetails } from '../bus-details';
import { BusDetailsService } from '../bus-details.service';

@Component({
  selector: 'app-busdetails',
  templateUrl: './busdetails.component.html',
  styleUrls: ['./busdetails.component.css']
})
export class BusdetailsComponent implements OnInit {
  bus:  BusDetails=new BusDetails();
  busId:number;
  submitted = false;

  constructor(private busService: BusDetailsService,
    private router: Router,private route: ActivatedRoute) { }


    ngOnInit() {
      this.bus = new BusDetails();
  
      // tslint:disable-next-line:no-string-literal
      this.busId = this.route.snapshot.params['id'];
      this.busService.getBusById(this.busId)
        .subscribe(data => {
          console.log(data)
          this.bus= data;
        }, error => console.log(error));
      }
  


  gotoList() {
    this.router.navigate(['/bus']);
  }
}