import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuitarPage } from './guitar.page';

const routes: Routes = [
  {
    path: '',
    component: GuitarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuitarPageRoutingModule {}
