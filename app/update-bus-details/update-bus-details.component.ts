import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDetails } from '../models/bus-details';
import { BusDetailsService } from '../services/bus-details.service';

@Component({
  selector: 'app-update-bus-details',
  templateUrl: './update-bus-details.component.html',
  styleUrls: ['./update-bus-details.component.css']
})
export class UpdateBusDetailsComponent implements OnInit {

  id!:number;
  bus!:BusDetails;
 submitted!: false;
 constructor(private route: ActivatedRoute,private router: Router,
   private busService: BusDetailsService) { }


   formupdatebusdetail = new FormGroup({
     busnumber: new FormControl('', Validators.required),
     bustype:new FormControl('', Validators.required),
     busfare:new FormControl('', Validators.required),
     busseats:new FormControl('', Validators.required),
     
    });

 ngOnInit() {
   this.bus = new BusDetails();

   // tslint:disable-next-line:no-string-literal
   this.id = this.route.snapshot.params['id'];
   this.busService.getBusById(this.id)
     .subscribe(data => {
       console.log(data)
       this.bus = data;
     }, error => console.log(error));
 }

 updateBus() {
   this.busService.updateBus(this.id, this.bus)
     .subscribe(data => console.log(data), error => console.log(error));
   this.bus = new BusDetails();
   this.gotoList();
 }
 BusUpdate(id:number){
   this.router.navigate(['update',id]);
 }

 onSubmit() {
   this.updateBus();
 }

 gotoList() {
   this.router.navigate(['buses']);
 }

}
