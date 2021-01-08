import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BusDetails } from '../bus-details';
import { BusDetailsService } from '../bus-details.service';

@Component({
  selector: 'app-bus-detailslist',
  templateUrl: './bus-detailslist.component.html',
  styleUrls: ['./bus-detailslist.component.css']
})
export class BusDetailslistComponent implements OnInit {

  bus:Observable<BusDetails[]>;

  constructor(private busService: BusDetailsService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bus = this.busService.getBus();
  }

  deleteBus(id:number) {
    this.busService.deleteBus(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  BusDetails(id:number){
    this.router.navigate(['details', id]);
  }
  BusUpdate(id: number){
    this.router.navigate(['update', id]);
  }
  
  AddBus(){
    this.router.navigate(['add']);
  }
}