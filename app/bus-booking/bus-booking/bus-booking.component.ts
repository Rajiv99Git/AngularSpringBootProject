import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/booking';
import { BusDetails } from 'src/app/models/bus-details';
import { BusRoute } from 'src/app/models/bus-route';
import { PassangerDetails } from 'src/app/models/passanger-details';
import { Payment } from 'src/app/models/payment';
import { UpdateBooking } from 'src/app/models/update-booking';
import { BusBookingService } from 'src/app/services/bus-booking.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-bus-booking',
  templateUrl: './bus-booking.component.html',
  styleUrls: ['./bus-booking.component.css']
})
export class BusBookingComponent implements OnInit {

  booking:Booking = new Booking();
  booking1 = new Observable<Booking[]>();
  booking2 = new Observable<UpdateBooking[]>();
  passanger= 1;
  itemList:any;
  itemList1:any;
  id!: number;

  seat:any;
  amount:number
  admin:UpdateBooking= new UpdateBooking;

  constructor(private route: ActivatedRoute,private router: Router,
    private busBookingService: BusBookingService,
    private sharedService: SharedService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   
    this.admin.seatNo=this.route.snapshot.params['seatNo'];
    this.admin.amount=this.route.snapshot.params['amount']; 
    this.admin.seatNo=this.route.snapshot.params['seatNo'];
    this.booking.paymentStatus="Pending";
    this.booking.seatNo=this.admin.seatNo;
    this.booking.totalFare=this.admin.amount;
    // this.booking.busId = new BusDetails();
    // this.booking.routeId = new BusRoute();
    // this.booking.totalFare = 0;
    // //this.booking.payment = new Payment();
    // this.booking.passangerDetails = new PassangerDetails();
     this.booking.dateOfJourney = this.sharedService.getToFromDate().depart_date;
    // this.booking.bookingDateTime = "";
   // alert(JSON.stringify(this.passanger)+""+JSON.stringify(this.booking.totalFare));
    this.id = this.route.snapshot.params['id'];
    this.busBookingService.busBooking(this.id,this.passanger,this.booking)
    .subscribe((itemList: Booking[])=>{
      this.itemList = itemList;
      console.log("item List : "+JSON.stringify(this.itemList));
    });
    this.id = this.route.snapshot.params['id'];
   
    this.admin.seatNo=this.route.snapshot.params['seatNo'];
    this.admin.amount=this.route.snapshot.params['amount']; 
 
    this.busBookingService.busStatus(this.id,this.admin) .subscribe((itemList1: UpdateBooking[])=>{
      this.itemList1 = itemList1;
      
      console.log("item List : "+JSON.stringify(this.itemList1));
    });;
    
    
 
console.log(" MEssage : "+JSON.stringify(this.booking2));
    //console.log("Booking Details: "+JSON.stringify(this.busBooking) );
  }

  onClick(routeId: number){
    this.id = this.route.snapshot.params['id'];
   
    this.admin.seatNo=this.route.snapshot.params['seatNo'];
    this.admin.amount=this.route.snapshot.params['amount']; 
    this.busBookingService.busStatus(routeId,this.admin);
    
    
    alert(JSON.stringify(this.id+""+this.admin.seatNo))
   
    this.router.navigate(['payment',routeId]); 
  }
}