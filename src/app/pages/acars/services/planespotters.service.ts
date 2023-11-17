import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';

export interface Planespotters {
  photos: Photo[]
}

export interface Photo {
  id: string
  thumbnail: Thumbnail
  thumbnail_large: ThumbnailLarge
  link: string
  photographer: string
}

export interface Thumbnail {
  src: string
  size: Size
}

export interface Size {
  width: number
  height: number
}

export interface ThumbnailLarge {
  src: string
  size: Size2
}

export interface Size2 {
  width: number
  height: number
}

@Injectable()
export class PlanespottersService {
  constructor(public http: HttpClient) {}

  public GetFromReg(reg: string | undefined): Observable<Photo[]> | undefined {
    if(!reg) {
      return undefined;
    }

    return this.http
    .get<Planespotters>(`https://api.planespotters.net/pub/photos/reg/${reg}`).pipe(map(s => s.photos));
  }
}
