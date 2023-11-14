import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcarsPageComponent } from './pages/acars-page/acars-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';

const routes: Routes = [
  { path: "", component: IndexPageComponent },
  { path: "acars", component: AcarsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
