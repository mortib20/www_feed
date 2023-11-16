import { Component } from '@angular/core';
import { AcarflowService } from './services/acarflow.service';
import { Frame } from './interfaces/Frame';

@Component({
  selector: 'app-acars',
  templateUrl: './acars.component.html',
  styleUrls: ['./acars.component.css']
})
export class AcarsComponent {
  public frames: Frame[] = [];

  constructor(private acarflowService: AcarflowService) {
    acarflowService.acarsdec.asObservable().subscribe(s => console.log(s));
    acarflowService.dumpvdl2.asObservable().subscribe(s => console.log(s));
    acarflowService.dumphfdl.asObservable().subscribe(s => console.log(s));
    acarflowService.jaero.asObservable().subscribe(s => console.log(s));
  }
}
