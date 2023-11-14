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
  _subscriptions: Subscription[] = [];
  _wsConnection: boolean = false;
  _messages: Frame[] = [];
  _stats = { dumpvdl2: 0, dumphfdl: 0, acarsdec: 0, jaero: 0 };

  constructor(private ws: SocketIoService) {
    Object.keys(this._stats).forEach(type => {
      console.log(type);
      const sub = this.ws.on<Frame>(type).subscribe(frame => {
        this._messages.push(frame);
        this._stats[frame.type]++
        console.groupCollapsed(type);
        console.dir(frame);
        console.groupEnd();
      });
      this._subscriptions.push(sub);
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
    this._subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }
}
