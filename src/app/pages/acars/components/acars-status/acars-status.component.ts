import { Component, Input, booleanAttribute } from '@angular/core';
import { Frame } from '../../interfaces/Frame';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acars-status',
  templateUrl: './acars-status.component.html',
  styleUrls: ['./acars-status.component.css']
})
export class AcarsStatusComponent {
  @Input() outputNames: string[] = [];
  @Input({transform: booleanAttribute}) status: boolean = false;

  private _messages: Frame[] = [];
  @Input() set messages(messages: Frame[]) {
    this._messages = messages;
  }
  public messages$ = new Observable<Frame[]>(s => s.next(this._messages));

  public CountFor(name: string) {
    if(!this._messages) {
      return;
    }

    return this._messages.filter(m => m.type == name).length;
  }
}
