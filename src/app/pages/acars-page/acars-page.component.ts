import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketIoService } from 'src/app/services/socket-io-service.service';
import { Frame } from '../../interfaces/Frame';

@Component({
  selector: 'app-acars-page',
  templateUrl: './acars-page.component.html',
  styleUrls: ['./acars-page.component.css']
})
export class AcarsPageComponent implements OnDestroy, OnInit {
  _dumpvdl2sub!: Subscription;
  _dumphfdlsub: Subscription;
  _acarsdecsub: Subscription;
  _jaerosub: Subscription;
  _wsConnection: boolean = false;
  _messages: Frame[] = [];
  _stats = { 'dumpvdl2': 0, 'dumphfdl': 0, 'acarsdec': 0, 'jaero': 0 };

  constructor(private ws: SocketIoService) {
    this._dumpvdl2sub = this.ws.on<Frame>('dumpvdl2').subscribe(frame => {
      this._messages.push(frame);
      this._stats['dumpvdl2']++;
      console.groupCollapsed('dumpvdl2');
      console.dir(frame);
      console.groupEnd();
    });

    this._dumphfdlsub = this.ws.on<Frame>('dumphfdl').subscribe(frame => {
      this._messages.push(frame);
      this._stats['dumphfdl']++;
      console.groupCollapsed('dumphfdl');
      console.dir(frame);
      console.groupEnd();
    });

    this._acarsdecsub = this.ws.on<Frame>('acarsdec').subscribe(frame => {
      this._messages.push(frame);
      this._stats['acarsdec']++;
      console.groupCollapsed('acarsdec');
      console.dir(frame);
      console.groupEnd();
    });

    this._jaerosub = this.ws.on<Frame>('jaero').subscribe(frame => {
      this._messages.push(frame);
      this._stats['jaero']++;
      console.groupCollapsed('jaero');
      console.dir(frame);
      console.groupEnd();
    });

    this.ws.connected() ? this._wsConnection = true : this._wsConnection = false;

    this.ws.on("connect").subscribe(() => {
      this._wsConnection = true;
    });

    this.ws.on("disconnect").subscribe(() => {
      this._wsConnection = false;
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._dumpvdl2sub.unsubscribe();
    this._acarsdecsub.unsubscribe();
    this._jaerosub.unsubscribe();
    this._dumphfdlsub.unsubscribe();
  }
}
