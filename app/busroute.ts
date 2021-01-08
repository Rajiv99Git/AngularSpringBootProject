
import { BusDetails } from './bus-details'
import { DriverDetails } from "./driver-details"
export class Busroute {
	 driver:DriverDetails= new DriverDetails();
	 bus_Id:BusDetails= new BusDetails();
	 routeId:number;
	 busRoute:String;
	  startTime:String;
	  endTime:String;
	  duration:String;
	  availableSeats:String;
	 distance:number;
	  source:String;
	destination:String;
}
