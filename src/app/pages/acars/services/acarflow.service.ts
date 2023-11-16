import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import * as socketio from 'socket.io-client';
import { Settings } from 'src/app/settings';
import { Frame } from '../interfaces/Frame';


@Injectable({
  providedIn: 'root'
})
export class AcarflowService implements OnDestroy {
  private websocket: socketio.Socket;
  private outputSubscriptions: Subscription[] = [];

  public acarsdec: BehaviorSubject<Frame | undefined> = new BehaviorSubject<Frame | undefined>(undefined);
  public dumphfdl: BehaviorSubject<Frame | undefined> = new BehaviorSubject<Frame | undefined>(undefined);
  public dumpvdl2: BehaviorSubject<Frame | undefined> = new BehaviorSubject<Frame | undefined>(undefined);
  public jaero: BehaviorSubject<Frame | undefined> = new BehaviorSubject<Frame | undefined>(undefined);

  constructor(settings: Settings) {
    this.websocket = socketio.io(settings.acarflow);
    this.websocket.on('connect', () => console.log("Websocket connected"));
    this.websocket.on('disconnected', () => console.log("Websocket disconnected"));
    this.websocket.on('error', (err) => console.log(err));
    this.subscribeToOutputs();
  }

  ngOnDestroy(): void {
    this.outputSubscriptions.forEach(sub => sub.unsubscribe());
  }

  private subscribeToOutputs() {
    this.outputSubscriptions.push(this.on<Frame>('acarsdec').subscribe(s => this.acarsdec.next(s)));
    this.outputSubscriptions.push(this.on<Frame>('dumphfdl').subscribe(s => this.dumphfdl.next(s)));
    this.outputSubscriptions.push(this.on<Frame>('dumpvdl2').subscribe(s => this.dumpvdl2.next(s)));
    this.outputSubscriptions.push(this.on<Frame>('jaero').subscribe(s => this.jaero.next(s)));
  }

  on<T>(event: string): Observable<T> {
    return new Observable<T>(s => { this.websocket.on(event, (data) => s.next(data)) });
  }
}
