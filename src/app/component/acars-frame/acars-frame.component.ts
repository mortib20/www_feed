import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Frame } from 'src/app/interfaces/Frame';

interface PlaneSpottersPhoto {
  src: string;
  size: {
    width: number;
    height: number;
  };
}

interface PlaneSpottersPhotos {
  id: string;
  photographer: string;
  link: string;
  thumbnail_large: PlaneSpottersPhoto;
  thumbnail: PlaneSpottersPhoto;
}

interface PlaneSpottersResponse {
  photos: PlaneSpottersPhotos[];
}


@Component({
  selector: 'app-acars-frame',
  templateUrl: './acars-frame.component.html',
  styleUrls: ['./acars-frame.component.css']
})
export class AcarsFrameComponent {
  _type!: string;
  _date!: string;
  _msg_text!: string;
  _reg!: string;
  _flight!: string;
  _hex!: string;
  _channel!: string;
  _openLink!: string;

  // PlaneSpottersResponse
  _plSpotImg!: PlaneSpottersPhoto;
  _plSpotPhGrap!: string;
  _plSpotLink!: string;

  constructor(private http: HttpClient) { }

  @Input() set Frame(frame: Frame) {
    this._type = frame.type.toUpperCase();
    this._date = new Date(frame.timestamp * 1000).toLocaleString('en-GB').replaceAll('/', '.');
    this._msg_text = frame.text;
    this._reg = frame.reg;
    this._flight = frame.flight;
    this._channel = frame.type === 'jaero' ? frame.channel : (Number(frame.channel) / 1000).toLocaleString('de') + ' MHz';
    this._hex = frame.icao;
    this._openLink = 'https://globe.adsbexchange.com?icao='+this._hex;
    this.GetPlaneSpottersPhoto();
  }

  GetPlaneSpottersPhoto() {
    if (this._type == "jaero") {
      this.http.get<PlaneSpottersResponse>(`https://api.planespotters.net/pub/photos/hex/${this._hex}`).subscribe(ob => {
        if (!ob.photos[0]) return;
        this._plSpotImg = ob.photos[0].thumbnail;
        this._plSpotPhGrap = ob.photos[0].photographer;
        this._plSpotLink = ob.photos[0].link;
      });
    } else {
      this.http.get<PlaneSpottersResponse>(`https://api.planespotters.net/pub/photos/reg/${this._reg}`).subscribe(ob => {
        if (!ob.photos[0]) return;
        this._plSpotImg = ob.photos[0].thumbnail;
        this._plSpotPhGrap = ob.photos[0].photographer;
        this._plSpotLink = ob.photos[0].link;
      });
    }
  }
}
