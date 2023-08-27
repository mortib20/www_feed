import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpenState: boolean = false;
  menuVisible!: boolean;

  constructor() {
    this.ChangeMenuVisibility();
  }

  ToTop() {
    window.scrollTo(0, 0);
  }

  ChangeMenuVisibility() {
    if(window.innerWidth <= 500 && this.menuOpenState) {
      this.menuVisible = false;
      return;
    }

    this.menuVisible = true;
  }

  ChangeMenuOpenState() {
    this.menuOpenState = this.menuOpenState ? false : true;
    this.ChangeMenuVisibility();
  }
}
