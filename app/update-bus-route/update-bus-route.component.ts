import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Busroute } from '../busroute';
import { BusrouteService } from '../busroute.service';
import { BusRoute } from '../models/bus-route';
import { BusRouteService } from '../services/bus-route.service';

@Component({
  selector: 'app-update-bus-route',
  templateUrl: './update-bus-route.component.html',
  styleUrls: ['./update-bus-route.component.css']
})
export class UpdateBusRouteComponent implements OnInit {
  constructor(private busrouteService:BusRouteService,private route: ActivatedRoute,
    private router:Router) { }
    id:number;
    busroute:Busroute;
    submitted:false;
    busId:number;
    driverId:number;
  hide = true;
  routeDetails:BusRoute= new BusRoute();
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.busId = this.route.snapshot.params['busId']
    this.driverId = this.route.snapshot.params['driverId']
   
  }

  formBusRoute = new FormGroup({
   
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    availableSeats: new FormControl('', Validators.required),
    distance: new FormControl('', Validators.required),
    source: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    busRoute: new FormControl('', Validators.required)
   
   });

   doSubmitForm(){
    this.busrouteService.updateRoute(this.id,this.busId,this.driverId,this.routeDetails)
    .subscribe(data => console.log(data), error => console.log(error));
  this.busroute = new Busroute();
   
    this.router.navigate(['busroutedetails',this.id,this.busId,this.driverId]);
  
        this.router.navigate(['busroutelist']);
  }

    
      


  }