import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Settings } from './settings';
import { IndexComponent } from './pages/index/index.component';
import { WebcamComponent } from './pages/webcam/webcam.component';
import { HttpClientModule } from '@angular/common/http';
import { AcarsModule } from './pages/acars/acars.module';
import { WebcamModule } from './pages/webcam/webcam.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AcarsModule,
    WebcamModule
  ],
  providers: [
    Settings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
