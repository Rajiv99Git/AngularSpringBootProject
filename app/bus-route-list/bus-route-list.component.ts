import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BusRoute } from '../models/bus-route';
import { BusRouteService } from '../services/bus-route.service';

@Component({
  selector: 'app-bus-route-list',
  templateUrl: './bus-route-list.component.html',
  styleUrls: ['./bus-route-list.component.css']
})
export class BusRouteListComponent implements OnInit {

  route!:Observable<BusRoute[]>;
 
  constructor(private busrouteService: BusRouteService,
    private router: Router) {}
 
  ngOnInit() {
    this.reloadData();
  }
 
  reloadData() {
    this.route = this.busrouteService.getRoute();
  }
 
  deleteBusRoute(id:number) {
    this.busrouteService.deleteRoute(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
 
  // BusRouteDetails(id:number,busId:number,driverId:number){
  //   this.router.navigate(['busroutedetails', id,busId,driverId]);
  // }
  BusRouteUpdate(id: number,busId:number,driverId:number){
    this.router.navigate(['busrouteupdate',id,busId,driverId]);
  }
  
  AddBusRoute(){
    this.router.navigate(['addbusroute']);
  }
  home(){
    this.router.navigate(['adminInterface']);
  }

}
