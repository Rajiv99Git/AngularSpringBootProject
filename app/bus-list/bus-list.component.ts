import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BusDetails } from '../models/bus-details';
import { BusDetailsService } from '../services/bus-details.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  bus!: Observable<BusDetails[]>;

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

  // BusDetails(id:number){
  //   this.router.navigate(['details', id]);
  // }  
  BusUpdate(id: number){
    this.router.navigate(['updatebus', id]);
  }
  
  AddBus(){
    this.router.navigate(['addbus']);
  }

  home(){
    this.router.navigate(['adminInterface']);
  }

}
