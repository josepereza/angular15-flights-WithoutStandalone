import { Component, Input } from '@angular/core';
import { FlightDTO } from 'src/app/core/flight/interface/flight.interface';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent {
  @Input() flight!: FlightDTO;
}
