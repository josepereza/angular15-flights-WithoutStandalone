import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'flights',
  },
  {
    path: 'flights',
    loadChildren: () =>
      import('./modules/flights/flights.module').then((m) => m.FlightsModule),
  },
  {
    path: 'my-flights',
    loadChildren: () =>
      import('./modules/my-flights/my-flights.module').then(
        (m) => m.MyFlightsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
