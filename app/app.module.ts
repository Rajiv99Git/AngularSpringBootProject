import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { SearchBusComponent } from './search-bus/search-bus/search-bus.component';
import { BusSearchResultComponent } from './bus-search-result/bus-search-result.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BusBookingComponent } from './bus-booking/bus-booking/bus-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingPaymentComponent } from './booking-payment/booking-payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PassangerRegistrationComponent } from './passanger-registration/passanger-registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { PassangerLoginComponent } from './passanger-login/passanger-login.component';
import { BusRouteComponent } from './bus-route/bus-route.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { AddBusDetailsComponent } from './add-bus-details/add-bus-details.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { UpdateBusRouteComponent } from './update-bus-route/update-bus-route.component';
import { BusRouteListComponent } from './bus-route-list/bus-route-list.component';
import { UpdateBookingComponent } from './models/update-booking/update-booking.component';
import {SeatsComponent} from './seats/seats.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
const routes: Routes = [
  {path:'',component:SearchBusComponent},
  {path:'search',component:BusSearchResultComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBusComponent,
    SeatsComponent,
    
    BusSearchResultComponent,
    
    BusBookingComponent,
    
    PaymentComponent,
    
    BookingPaymentComponent,
    
    PassangerRegistrationComponent,
    
    PassangerLoginComponent,
    
    BusRouteComponent,
    
    AdminInterfaceComponent,
    
    AddBusDetailsComponent,
    
    UpdateBusDetailsComponent,
    
    BusListComponent,
    
    AddDriverComponent,
    
    UpdateDriverComponent,
    
    DriverListComponent,
    
    DeleteBusComponent,
    
    UpdateBusRouteComponent,
    
    BusRouteListComponent,
    
    UpdateBookingComponent,
    
    BookinglistComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
