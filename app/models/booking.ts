import { BusDetails } from "./bus-details";
import { BusRoute } from "./bus-route";
import { PassangerDetails } from "./passanger-details";
import { Payment } from "./payment";

export class Booking {
    busId : BusDetails | undefined;
	routeId : BusRoute | undefined;
	paymentStatus : string | undefined; // Pending or Done
	payment : Payment | undefined;
	passangerDetails : PassangerDetails | undefined;
	totalFare : number | undefined;
	bookingDateTime : string | undefined;
	dateOfJourney : string | undefined;
	seatNo : number | undefined;
}
