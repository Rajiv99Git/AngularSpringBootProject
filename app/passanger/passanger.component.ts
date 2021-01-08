import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Passanger } from '../passanger';
import { PassangerService } from '../passanger.service';

@Component({
  selector: 'app-passanger',
  templateUrl: './passanger.component.html',
  styleUrls: ['./passanger.component.css']
})
export class PassangerComponent implements OnInit {

 
  passanger:Observable<Passanger[]>;

  constructor(private  passangerService: PassangerService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.passanger = this. passangerService. getPassanger();
  }


}
