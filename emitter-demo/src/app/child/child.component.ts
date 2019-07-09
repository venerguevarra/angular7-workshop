import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() private numberGenerated = new EventEmitter<number>();

  public generateNumber() {
    const randomNumber = Math.random();
    this.numberGenerated.emit(randomNumber);
  }
}