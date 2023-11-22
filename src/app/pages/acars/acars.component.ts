import { Component, OnDestroy } from '@angular/core';
import { AcarflowService } from './services/acarflow.service';
import { Frame } from './interfaces/Frame';
import { Subscription } from 'rxjs';
import { Settings } from 'src/app/settings';

@Component({
  selector: 'app-acars',
  templateUrl: './acars.component.html',
  styleUrls: ['./acars.component.css']
})
export class AcarsComponent implements OnDestroy {
  private outputSubscriptions: Subscription[] = [];
  public messages: Frame[] = [];

  constructor(public acarflowService: AcarflowService, public settings: Settings) {
    // Subscribe to ACARFLOW Outputs
    settings
      .acarflowOutputs
      .forEach(output =>
        this.outputSubscriptions.push(
          acarflowService.on(output)
            .subscribe(s => this.SubscribeToAcarflowOutput(s))
        )
      );
  }

  private SubscribeToAcarflowOutput(frame: Frame) {
    this.messages.push(frame);
    this.LogMessage(frame);
  }

  private LogMessage(frame: Frame) {
    console.groupCollapsed(frame.reg);
    console.log(frame);
    console.groupEnd();
  }

  ngOnDestroy(): void {
    this.outputSubscriptions.forEach(s => s.unsubscribe());
  }
}
