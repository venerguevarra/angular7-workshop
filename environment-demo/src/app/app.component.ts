import { Component } from '@angular/core';
import { environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'environment-demo';
  environment: string;
  username: string;
  password: string;
  apiUrl: string;

  ngOnInit() {
    this.environment = environment.mode;
    this.apiUrl = environment.apiUrl;
    this.username = environment.username;
    this.password = environment.password;
  }
}
