import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FlightsComponent } from './components/flights/flights.component';

const routes: Routes = [
  {
    path: '',
    component: FlightsComponent,
  },
  {
    path: ':id',
    component: FlightDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
