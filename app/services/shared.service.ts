import { Injectable } from '@angular/core';
import { SearchBus } from '../models/search-bus';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  searchBus = new SearchBus();
  constructor() { }

  setToFromDate(searchBus: any){
    this.searchBus = searchBus;
  }

  getToFromDate(){
    return this.searchBus;
  }

}
