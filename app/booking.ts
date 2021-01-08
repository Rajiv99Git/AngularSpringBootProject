import { BusDetails } from "./bus-details";
import { BusRouteDetailsComponent } from "./bus-route-details/bus-route-details.component";
import { Busroute } from "./busroute";
import { DriverDetails } from "./driver-details";
import { Passanger } from "./passanger";
import { Payment } from "./payment";

export class Booking {
    bookingId: number;
    busId:BusDetails= new BusDetails();
    routeId:Busroute= new Busroute();
    paymentStatus:string; // Pending or Done
	payment:Payment=new Payment();
	passangerDetails:Passanger= new Passanger();
	totalFare:number;
	bookingDateTime:Date; 


}
