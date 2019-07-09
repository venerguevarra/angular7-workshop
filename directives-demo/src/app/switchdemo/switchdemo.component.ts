import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {

  people: Person[] = [
    {
      name: "Michael Jackson",
      country: "USA",
      gender: 'Male',
      status: 'Dead'
    },
    {
      name: "Justin Bieber",
      country: "Canada",
      gender: 'Male',
      status: 'Alive'
    },
    {
      name: "Daddy Yankee",
      country: "Puerto Rico",
      gender: 'Male',
      status: 'Alive'
    },
    {
      name: "Rodrigo Duterte",
      country: "Philippines",
      gender: 'Male',
      status: 'Alive'
    },
    {
      name: "Selena Gomez",
      country: "USA",
      gender: 'Male',
      status: 'Alive'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
