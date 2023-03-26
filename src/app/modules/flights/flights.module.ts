import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightsRoutingModule } from './flights-routing.module';

@NgModule({
  declarations: [FlightDetailsComponent, FlightsComponent],
  imports: [CommonModule, FlightsRoutingModule, SharedModule],
})
export class FlightsModule {}
