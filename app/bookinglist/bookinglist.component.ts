import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingService } from '../booking.service';
import { Booking } from '../models/booking';
import { BusBookingService } from '../services/bus-booking.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {

  booking:Observable<Booking[]>;

  constructor(private bookingService: BusBookingService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.booking = this. bookingService. getBookinglist();
  }
  home(){
    this.router.navigate(['adminInterface']);
  }
}
