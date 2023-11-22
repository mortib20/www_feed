import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Settings } from './settings';
import { HttpClientModule } from '@angular/common/http';
import { AcarsModule } from './pages/acars/acars.module';
import { WebcamModule } from './pages/webcam/webcam.module';
import { HeaderModule } from './header/header.module';
import { IndexModule } from './pages/index/index.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AcarsModule,
    WebcamModule,
    HeaderModule,
    IndexModule
  ],
  providers: [
    Settings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
