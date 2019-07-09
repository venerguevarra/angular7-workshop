import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public randomNumber: number;

  public onNumberGenerated(randomNumber: number) {
    this.randomNumber = randomNumber;
  }
}