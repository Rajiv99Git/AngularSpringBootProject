import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchBus } from 'src/app/models/search-bus';
import { SearchBusService } from 'src/app/services/search-bus.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  searchBus = new SearchBus();
  
  constructor(
    private busService:SearchBusService,
    private sharedService: SharedService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  
  SearchBus(form: NgForm) {
  
    this.searchBus.leaving_from = form.value.leaving_from;
    this.searchBus.destination = form.value.going_to;
    this.searchBus.depart_date = form.value.depart_date;

    this.sharedService.setToFromDate(this.searchBus);
    this.router.navigate(['search']);
    //console.log("Searching for buses!!!");
  }
}
