import { Component, OnInit } from '@angular/core';
import { WebcamAPIService } from './services/WebcamAPI.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  private _currentImages: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public currentImages$ = this._currentImages.asObservable();

  constructor(private api: WebcamAPIService) {
  }
  ngOnInit(): void {
    this.api
      .getImagesByDate(new Date(Date.now()))
      .subscribe(s => {
        this._currentImages.next(s);
        console.log(s);
      });
  }

  public appendWebcamLink(file: string) {
    return this.api.webcamLink + 'img/' + file;
  }
}
