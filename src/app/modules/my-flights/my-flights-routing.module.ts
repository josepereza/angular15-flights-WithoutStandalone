import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFlightsComponent } from './components/my-flights/my-flights.component';

const routes: Routes = [
  {
    path: '',
    component: MyFlightsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFlightsRoutingModule {}
