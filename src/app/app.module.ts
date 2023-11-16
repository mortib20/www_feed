import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Settings } from './settings';
import { IndexComponent } from './pages/index/index.component';
import { AcarsComponent } from './pages/acars/acars.component';
import { WebcamComponent } from './pages/webcam/webcam.component';
import { AcarsStatusComponent } from './pages/acars/components/acars-status/acars-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    AcarsComponent,
    WebcamComponent,
    AcarsStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Settings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
