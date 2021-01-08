import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
import { Payment } from '../models/payment';
import { BusBookingService } from '../services/bus-booking.service';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  id!: number;
  payment: any;
  payments: Payment = new Payment();
  booking:any;
  constructor(private route: ActivatedRoute,private router: Router,
    private paymentService: PaymentService, private busBookingService: BusBookingService) { }

  ngOnInit(): void {
    
    this.payments.mode_Of_payment="Online";
    this.id = this.route.snapshot.params['id'];
    this.paymentService.makePayment(this.id,this.payments).subscribe(
      (payment: Payment[])=>{
        this.payment = payment;
        console.log("Payment Details : "+this.payment);
      }
    );

    this.router.navigate(['paymentstatus', this.id]); 
  }

}
