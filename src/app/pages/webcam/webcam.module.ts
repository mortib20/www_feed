import {CommonModule, NgOptimizedImage} from "@angular/common";
import { NgModule } from "@angular/core";
import { WebcamComponent } from "./webcam.component";
import { WebcamAPIService } from "./services/WebcamAPI.service";
import { WebcamViewerComponent } from './components/webcam-viewer/webcam-viewer.component';

@NgModule({
  declarations: [
    WebcamComponent,
    WebcamViewerComponent
  ],
  providers: [
    WebcamAPIService
  ],
    imports: [
        CommonModule,
        NgOptimizedImage
    ]
})
export class WebcamModule {

}
