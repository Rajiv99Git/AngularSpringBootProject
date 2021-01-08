import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
import { BusBookingService } from '../services/bus-booking.service';

@Component({
  selector: 'app-booking-payment',
  templateUrl: './booking-payment.component.html',
  styleUrls: ['./booking-payment.component.css']
})
export class BookingPaymentComponent implements OnInit {

  booking:any;
  id!: number;
  constructor(private busBookingService: BusBookingService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.busBookingService.getBooking(this.id).subscribe(
      (itemList: Booking[])=>{
        this.booking = itemList;
        console.log("item List : "+this.booking);
      }
    );
  }

}
