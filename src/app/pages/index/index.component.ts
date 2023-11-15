import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Settings } from 'src/app/settings';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  public tar1090: SafeUrl;
  constructor(public settings: Settings, sanitizer: DomSanitizer) {
    this.tar1090 = sanitizer.bypassSecurityTrustResourceUrl(settings.tar1090);
  }
}
