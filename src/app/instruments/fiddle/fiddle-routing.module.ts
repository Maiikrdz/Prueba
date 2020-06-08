import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiddlePage } from './fiddle.page';

const routes: Routes = [
  {
    path: '',
    component: FiddlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiddlePageRoutingModule {}
