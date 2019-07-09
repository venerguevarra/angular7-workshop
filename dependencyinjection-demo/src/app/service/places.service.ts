import { Injectable } from '@angular/core';
import { Place } from '../model/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places: Place[];

  constructor() {
    this.places = [];
    this.places.push({ name: 'Charminar', city: 'Hyderabad', country: 'India', isVisited: true, rating: 4 });
    this.places.push({ name: 'London Bridge', city: 'London', country: 'UK', isVisited: false, rating: 4.5 });
    this.places.push({ name: 'Red Rocks', city: 'Denver', country: 'USA', isVisited: true, rating: 3 });
    this.places.push({ name: 'Taj Mahal', city: 'Agra', country: 'India', isVisited: false, rating: 5 });
    this.places.push({ name: 'Eiffel Tower', city: 'Paris', country: 'France', isVisited: true, rating: 4 });
  }

}
