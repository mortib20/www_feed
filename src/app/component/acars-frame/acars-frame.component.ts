import { Component, Input } from '@angular/core';
import { Frame } from 'src/app/interfaces/Frame';

@Component({
  selector: 'app-acars-frame',
  templateUrl: './acars-frame.component.html',
  styleUrls: ['./acars-frame.component.css']
})
export class AcarsFrameComponent {
  _type!: string;
  _date!: string;
  _msg_text!: string;

  @Input() set Frame(frame: Frame) {
    this._type = frame.type;
    this._date = new Date(frame.t.sec * 1000).toLocaleString();
    this._msg_text = frame.acars.msg_text;
  }
}
