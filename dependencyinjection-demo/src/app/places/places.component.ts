import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../service/places.service';
import { Place } from '../model/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  title: string = "Places";
  places: Place[];

  constructor(private placesService: PlacesService) {
    this.places = placesService.places;
  }

  ngOnInit() {
  }

}
