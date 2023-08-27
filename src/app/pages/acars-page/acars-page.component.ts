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
  _wsSubscription!: Subscription;
  _wsConnection: boolean = false;
  _messages: Frame[] = [];
  _stats = { ACARS: 0, VDL2: 0, HFDL: 0, SATCOM: 0 };

  constructor(private ws: SocketIoService) {
    this._wsSubscription = this.ws.on<Frame>('NewData').subscribe(frame => {
      this._messages.push(frame);
      this._stats[frame.type]++;
      console.log(frame);
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
    this._wsSubscription.unsubscribe();
  }
}
