import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBusDetailsComponent } from './add-bus-details/add-bus-details.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { BookingPaymentComponent } from './booking-payment/booking-payment.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BusBookingComponent } from './bus-booking/bus-booking/bus-booking.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusRouteListComponent } from './bus-route-list/bus-route-list.component';
import { BusRouteComponent } from './bus-route/bus-route.component';
import { BusSearchResultComponent } from './bus-search-result/bus-search-result.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { PassangerLoginComponent } from './passanger-login/passanger-login.component';
import { PassangerRegistrationComponent } from './passanger-registration/passanger-registration.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchBusComponent } from './search-bus/search-bus/search-bus.component';
import { SeatsComponent } from './seats/seats.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { UpdateBusRouteComponent } from './update-bus-route/update-bus-route.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';

const routes: Routes = [
  {path:'',component:SearchBusComponent},
  {path:'search',component:BusSearchResultComponent},
  {path:'book/:id/:seatNo/:amount',component:BusBookingComponent},
  {path:'payment/:id',component:PaymentComponent},
  {path:'paymentstatus/:id',component:BookingPaymentComponent},
  {path:'passangerRegistration',component:PassangerRegistrationComponent},
  {path:'login',component:PassangerLoginComponent},
  {path:'busRoute',component:BusRouteComponent},
  {path:'adminInterface',component:AdminInterfaceComponent},
  {path:'adminInterface/buses',component:BusListComponent},
  {path:'buses',component:BusListComponent},
  {path:'addbus',component:AddBusDetailsComponent},
  {path:'updatebus/:id',component:UpdateBusDetailsComponent},
  {path:'driverlist',component:DriverListComponent},
  {path:'adminInterface/drivers',component:DriverListComponent},
  {path:'addDriver',component:AddDriverComponent},
  {path:'driverupdate',component:UpdateDriverComponent},
  {path:'driverupdate/:id',component:UpdateDriverComponent},
  {path:'busroutelist',component:BusRouteListComponent},
  {path:'busroutes',component:BusRouteListComponent},
  {path:'adminInterface/busRoutes',component:BusRouteListComponent},
  {path:'addbusroute',component:BusRouteComponent},
  {path:'seats/:id',component:SeatsComponent},
  {
    path:'PassangerLogin',component:PassangerLoginComponent
  },
  {path:'busrouteupdate/:id/:busId/:driverId',component:UpdateBusRouteComponent},
  {path:'adminInterface/bookingDetails',component:BookinglistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
