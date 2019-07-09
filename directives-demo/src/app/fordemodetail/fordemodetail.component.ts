import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fordemodetail',
  templateUrl: './fordemodetail.component.html',
  styleUrls: ['./fordemodetail.component.css']
})
export class FordemodetailComponent implements OnInit {

  @Input() policy: any;

  constructor() { }

  ngOnInit() {
  }

}
