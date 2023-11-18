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

  public date: string = new Date(Date.now()).toISOString().slice(0, 10);

  constructor(private api: WebcamAPIService) {
    this.refresh();
  }

  public refresh() {
    this.api
      .getImagesByDate(new Date(this.date))
      .subscribe(s => {
        this._currentImages.next(s);
        console.log(s);
      });
  }

  handleDateChange(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
  }
}
