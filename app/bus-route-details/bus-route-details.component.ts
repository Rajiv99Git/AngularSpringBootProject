import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Busroute } from '../busroute';
import { BusrouteService } from '../busroute.service';

@Component({
  selector: 'app-bus-route-details',
  templateUrl: './bus-route-details.component.html',
  styleUrls: ['./bus-route-details.component.css']
})
export class BusRouteDetailsComponent implements OnInit {

  busroute:  Busroute=new Busroute();
  busId:number;
  submitted = false;

  constructor(private busrouteService: BusrouteService,
    private router: Router,private route: ActivatedRoute,) { }


    ngOnInit() {
      this.busroute = new Busroute();
  
      // tslint:disable-next-line:no-string-literal
      this.busId = this.route.snapshot.params['id'];
      this.busrouteService.getRouteById(this.busId)
        .subscribe(data => {
          console.log(data)
          this.busroute= data;
        }, error => console.log(error));
      }
  


  gotoList() {
    this.router.navigate(['/busroute']);
  }
}
