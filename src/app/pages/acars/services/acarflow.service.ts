import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import * as socketio from 'socket.io-client';
import { Settings } from 'src/app/settings';
import { Frame } from '../interfaces/Frame';


@Injectable({
  providedIn: 'root'
})
export class AcarflowService implements OnDestroy {
  private websocket: socketio.Socket;

  private _connected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public connected$ = this._connected.asObservable();

  constructor(settings: Settings) {
    this.websocket = socketio.io(settings.acarflow);
    this.websocket.io.on('open', () => this.Connect());
    this.websocket.io.on('close', () => this.Disconnected());
  }

  ngOnDestroy(): void {
    this.websocket.disconnect();
  }

  private Connect() {
    console.log("acarflow connected");
    this._connected.next(true);
  }

  private Disconnected() {
    console.log("acarflow disconnected");
    this._connected.next(false);
  }

  on(event: string): Observable<Frame> {
    return new Observable<Frame>(s => {
      this.websocket
        .on(event, (data) => { if ((data as Frame).text != '') { s.next(data) } })
    });
  }
}
