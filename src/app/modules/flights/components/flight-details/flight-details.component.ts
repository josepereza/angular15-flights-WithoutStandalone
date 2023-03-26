import * as moment from 'moment';
import { filter, map, Observable, switchMap } from 'rxjs';
import { FlightsService } from 'src/app/core/flight/flights.service';
import { FlightDTO } from 'src/app/core/flight/interface/flight.interface';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements OnInit {
  flight$!: Observable<FlightDTO>;

  constructor(
    private flightsService: FlightsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.flight$ = this.activatedRoute.params.pipe(
      filter((params) => !!params['id']),
      map((params: Params) => params['id']),
      switchMap((id: string) => {
        return this.flightsService.getOne(id);
      })
    );
  }

  convertSeconds(seconds: number): string {
    return moment.utc(seconds * 1000).format('HH mm');
  }
}
