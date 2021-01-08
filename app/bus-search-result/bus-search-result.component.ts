import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BusRoute } from '../models/bus-route';
import { SearchBusService } from '../services/search-bus.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-bus-search-result',
  templateUrl: './bus-search-result.component.html',
  styleUrls: ['./bus-search-result.component.css']
})
export class BusSearchResultComponent implements OnInit {

    busSearch : any;
    // itemList: BusRoute[] = [];
    itemList:any;
   
    constructor(private sharedService: SharedService,
    private searchBusService:SearchBusService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.busSearch = this.sharedService.getToFromDate();
    this.searchBusService.getBusList(this.busSearch.leaving_from,this.busSearch.destination)
    .subscribe((itemList: BusRoute[])=>{
      this.itemList = itemList;
      console.log("item List : "+this.itemList);
    });
   
  }

  onClick(id: number){
    this.router.navigate(['seats', id]); 
  }
}