import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Busroute } from '../busroute';
import { BusrouteService } from '../busroute.service';

@Component({
  selector: 'app-busroute',
  templateUrl: './busroute.component.html',
  styleUrls: ['./busroute.component.css']
})
export class BusrouteComponent implements OnInit {

  route:Observable<Busroute[]>;

  constructor(private busrouteService: BusrouteService,
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

  BusRouteDetails(id:number,busId:number,driverId:number){
    this.router.navigate(['busroutedetails', id,busId,driverId]);
  }
  BusRouteUpdate(id: number,busId:number,driverId:number){
    this.router.navigate(['busrouteupdate',id,busId,driverId]);
  }
  
  AddBusRoute(busId:number,driverId:number){
    this.router.navigate(['addbusroute',busId,driverId]);
  }
  home(){
    this.router.navigate(['adminInterface']);
  }

}
