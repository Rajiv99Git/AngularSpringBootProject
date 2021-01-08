import { Booking } from "./booking";

export class Payment {
	transactionId: string|undefined;
    mode_Of_payment : string | undefined;
	bookingId : Booking | undefined;
	amount : number | undefined;
}
