import { Component } from '@angular/core';
import { Settings } from './settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public settings: Settings) {
  }
}
