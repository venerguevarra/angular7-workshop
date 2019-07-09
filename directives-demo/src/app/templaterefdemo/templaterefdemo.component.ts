import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templaterefdemo',
  templateUrl: './templaterefdemo.component.html',
  styleUrls: ['./templaterefdemo.component.css']
})
export class TemplaterefdemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  callPhone(phoneNumber: string) {
    alert(phoneNumber);
  }
}
