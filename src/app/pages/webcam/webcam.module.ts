import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WebcamComponent } from "./webcam.component";
import { WebcamAPIService } from "./services/WebcamAPI.service";

@NgModule({
  declarations: [
    WebcamComponent
  ],
  providers: [
    WebcamAPIService
  ],
  imports: [
    CommonModule
  ]
})
export class WebcamModule {

}
