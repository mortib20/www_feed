import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcarsPageComponent } from './pages/acars-page/acars-page.component';
import { AcarsFrameComponent } from './component/acars-frame/acars-frame.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AcarsPageComponent,
    AcarsFrameComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
