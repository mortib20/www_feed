import { Component, Input, booleanAttribute } from '@angular/core';
import { Frame } from '../../interfaces/Frame';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acars-status',
  templateUrl: './acars-status.component.html',
  styleUrls: ['./acars-status.component.css']
})
export class AcarsStatusComponent {
  @Input({ transform: booleanAttribute }) status: boolean = false;
  @Input() outputNames: string[] = [];
  @Input() messages: Frame[] = [];

  public messages$ = new Observable<Frame[]>(s => s.next(this.messages));

  public CountFor(name: string) {
    return !this.messages ?
      undefined :
      this.messages.filter(m => m.type == name).length;
  }

  protected readonly window = window

  scrollTop() {
    window.scroll(0, 0);
  }
}
