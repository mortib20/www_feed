import { Component } from '@angular/core';
import { WebcamAPIService } from './services/WebcamAPI.service';
import { BehaviorSubject } from 'rxjs';
import { Photo } from './components/webcam-viewer/webcam-viewer.component';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent {
  private _currentImages: BehaviorSubject<Photo[]> = new BehaviorSubject<Photo[]>([]);
  public currentImages$ = this._currentImages.asObservable();

  public date: Date = new Date();

  constructor(private api: WebcamAPIService) {
    this.refresh();
  }

  public refresh() {
    this.api
      .getImagesByDate(this.date)
      .subscribe(s => {
        this._currentImages.next(s);
        console.log(s);
      });
  }

  handleDateChange(event: Event) {
    this.date = new Date((event.target as HTMLInputElement).value);
  }

  nextDay() {
    this.date.setDate(this.date.getDate() + 1);
  }

  lastDay() {
    this.date.setDate(this.date.getDate() - 1);
  }

  getDateTime() {
    return this.date.toISOString().slice(0,10);
  }
}
