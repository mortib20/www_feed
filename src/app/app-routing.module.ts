import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/components/index/index.component';
import { AcarsComponent } from './pages/acars/acars.component';
import { WebcamComponent } from './pages/webcam/webcam.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'acars', component: AcarsComponent },
  { path: 'webcam', component: WebcamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
