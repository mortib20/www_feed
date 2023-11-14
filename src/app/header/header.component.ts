import { Component } from '@angular/core';
import { Settings } from '../settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public linksOpen = false;

  constructor(public settings: Settings) {
  }

  changeLinksOpen() {
    this.linksOpen = !this.linksOpen;
    console.log("LOL");

  }
}
