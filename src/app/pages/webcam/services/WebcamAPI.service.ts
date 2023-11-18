import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Settings } from "src/app/settings";

@Injectable()
export class WebcamAPIService {
  public webcamLink: string;

  constructor(private http: HttpClient, settings: Settings) {
    this.webcamLink = settings.webcamLink;
  }

  getImagesByDate(date: Date) {
    return this.http
      .get<string[]>(this.webcamLink + 'date/' + date.toISOString().slice(0, 10));
  }
}
