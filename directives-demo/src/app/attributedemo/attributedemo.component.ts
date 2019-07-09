import { Component, OnInit } from "@angular/core";
import { Person } from "../model/person";
import { Data } from '../model/data';

@Component({
  selector: "app-attributedemo",
  templateUrl: "./attributedemo.component.html",
  styleUrls: ["./attributedemo.component.css"]
})
export class AttributedemoComponent implements OnInit {
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

  data = new Data('');

  constructor() {}

  ngOnInit() {}
}
