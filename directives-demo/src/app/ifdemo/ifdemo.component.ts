import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-ifdemo",
  templateUrl: "./ifdemo.component.html",
  styleUrls: ["./ifdemo.component.css"]
})
export class IfdemoComponent implements OnInit {
  showActions: boolean = false;
  contacts = [
    { name: "test1", email: "test1@test1.com" },
    { name: "test2", email: "test1@test2.com" },
    { name: "test3", email: "test1@test3.com" },
    { name: "test4", email: "test1@test4.com" }
  ];

  constructor() {}

  ngOnInit() {}
}
