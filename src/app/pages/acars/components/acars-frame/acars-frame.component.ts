import { Component, Input } from '@angular/core';
import { Frame } from '../../interfaces/Frame';
import { Photo, PlanespottersService } from '../../services/planespotters.service';

@Component({
  selector: 'app-acars-frame',
  templateUrl: './acars-frame.component.html',
  styleUrls: ['./acars-frame.component.css'],
  providers: [PlanespottersService]
})
export class AcarsFrameComponent {
  private _frame: Frame | undefined;
  @Input() set frame(frame: Frame | undefined) {
    this._frame = frame;
    this.timestamp = new Date(Number(frame?.timestamp) * 1000).toLocaleString('en-GB').replaceAll('/', '.');
    this.channel = frame?.type === 'jaero' ? frame?.channel : (Number(frame?.channel) / 1000).toLocaleString('de-DE') + ' MHz';
    this.planespottersService.GetFromReg(this.frame?.reg)?.subscribe(r => this.photos = r);
  }
  public get frame() {
    return this._frame;
  }

  public timestamp: string = '';
  public channel: string = '';
  public photos: Photo[] | undefined;

  constructor(public planespottersService: PlanespottersService) {
  }
}
