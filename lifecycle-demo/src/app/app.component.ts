import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  showSignup: boolean;
  btnText: string;
  constructor() {
    this.showSignup = false;
    this.btnText = 'Show';
  }

  toggleSignup(){
    this.showSignup = !this.showSignup;
    this.btnText = this.showSignup ? 'Hide' : 'Show';
  }
}
