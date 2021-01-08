import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusDetails } from '../models/bus-details';
import { BusDetailsService } from '../services/bus-details.service';

@Component({
  selector: 'app-add-bus-details',
  templateUrl: './add-bus-details.component.html',
  styleUrls: ['./add-bus-details.component.css']
})
export class AddBusDetailsComponent implements OnInit {

  bus:  BusDetails=new BusDetails();
  submitted = false;
  //selected = 'AC';
  constructor(private busService: BusDetailsService,
    private router: Router) { }

  ngOnInit() {
  }

  formbusdetail = new FormGroup({
    busnumber: new FormControl('', Validators.required),
    bustype:new FormControl('', Validators.required),
    busfare:new FormControl('', Validators.required),
    busseats:new FormControl('', Validators.required),
    
   });

  newBus(): void {
    this.submitted = false;
    this.bus = new BusDetails();
  }

  save() {
    this.busService.createBus(this.bus)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bus = new BusDetails();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['buses']);
  }

}
