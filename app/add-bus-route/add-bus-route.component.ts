import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Busroute } from '../busroute';
import { BusrouteService } from '../busroute.service';

@Component({
  selector: 'app-add-bus-route',
  templateUrl: './add-bus-route.component.html',
  styleUrls: ['./add-bus-route.component.css']
})
export class AddBusRouteComponent implements OnInit {

  busroute:  Busroute=new Busroute();
  busId:number;
  driverId:number
  submitted = false;

  constructor(private busrouteService: BusrouteService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.busId = this.route.snapshot.params['busId'];
    this.driverId = this.route.snapshot.params['driverId'];
  }

  newBus(): void {
    this.submitted = false;
    this.busroute = new Busroute();
  }

  save() {
  
    this.busrouteService.createRoute(this.busroute,this.busId,this.driverId)
      .subscribe(data => console.log(data), error => console.log(error));
    this.busroute = new Busroute();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/busroute']);
  }

}
