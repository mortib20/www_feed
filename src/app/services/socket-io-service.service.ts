import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  _socket: Socket;

  constructor() {
    this._socket = io("wss://dyn2.martpaul.de:22001");
    this._socket.on('connect', () => console.log("Websocket connected"));
    this._socket.on('disconnected', () => console.log("Websocket disconnected"));

    this._socket.on('error', (err) => console.log(err));
  }

  on<T>(event: string): Observable<T> {
    return new Observable<T>(s => { this._socket.on(event, (data) => s.next(data)) });
  }

  connected() {
    return this._socket.connected;
  }
}
