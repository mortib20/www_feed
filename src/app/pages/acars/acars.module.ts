import { NgModule } from "@angular/core";
import { AcarsComponent } from "./acars.component";
import { AcarsFrameComponent } from "./components/acars-frame/acars-frame.component";
import { AcarsStatusComponent } from "./components/acars-status/acars-status.component";
import { AcarflowService } from "./services/acarflow.service";
import { PlanespottersService } from "./services/planespotters.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AcarsComponent,
    AcarsFrameComponent,
    AcarsStatusComponent,
  ],
  providers: [
    AcarflowService,
    PlanespottersService
  ],
  imports: [
    CommonModule
  ]
})
export class AcarsModule {

}
