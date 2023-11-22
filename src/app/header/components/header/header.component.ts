import { Component, HostListener } from '@angular/core';
import { Settings } from '../../../settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public linksOpen = false;
  public currentWidth: number;
  public currentHeight: number;

  constructor(public settings: Settings) {
    this.currentWidth = window.innerWidth;
    this.currentHeight = window.innerHeight;
  }

  changeLinksOpen() {
    this.linksOpen = !this.linksOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.currentWidth = event.target.currentWidth;
    this.currentHeight = event.target.currentHeight;
  }

  enableLinksOpen() {
    if (this.currentWidth <= 600) {
      return;
    }

    this.linksOpen = true;
  }

  disableLinksOpen() {
    if (this.currentWidth <= 600) {
      return;
    }

    this.linksOpen = false;
  }
}
