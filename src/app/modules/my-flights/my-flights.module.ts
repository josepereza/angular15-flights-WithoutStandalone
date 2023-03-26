import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MyFlightsComponent } from './components/my-flights/my-flights.component';
import { MyFlightsRoutingModule } from './my-flights-routing.module';

@NgModule({
  declarations: [MyFlightsComponent],
  imports: [CommonModule, MyFlightsRoutingModule, SharedModule],
})
export class MyFlightsModule {}
