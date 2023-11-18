import { Component, Input } from '@angular/core';

export interface Photo {
  src: string;
  name: string;
}

@Component({
  selector: 'app-webcam-viewer',
  templateUrl: './webcam-viewer.component.html',
  styleUrls: ['./webcam-viewer.component.css']
})
export class WebcamViewerComponent {
  public _currentImages: Photo[] | null = null;

  @Input({ required: true })
  set currentImages(i: Photo[] | null) {
    if (i) {
      this._currentImages = i;
      this.maxIndex = i.length - 1;
    }
  }

  maxIndex: number = 0;
  currentIndex: number = 0;
  currentBrightness: number = 1;
  currentContrast: number = 1;
  currentHue: number = 0;
  currentHueDeg: string = '0deg';

  constructor() { }

  handleIndexInput(event: Event) {
    this.currentIndex = Number((event.target as HTMLInputElement).value);
  }

  handleBrightnessInput(event: Event) {
    this.currentBrightness = Number((event.target as HTMLInputElement).value);
  }

  handleContrastInput(event: Event) {
    this.currentContrast = Number((event.target as HTMLInputElement).value);
  }

  handleHueInput(event: Event) {
    this.currentHue = Number((event.target as HTMLInputElement).value);
    this.currentHueDeg = this.currentHue + 'deg';
  }

  incrementIndex() {
    this.currentIndex++;
  }

  decrementIndex() {
    this.currentIndex--;
  }
}
