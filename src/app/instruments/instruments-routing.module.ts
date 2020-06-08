import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentsPage } from './instruments.page';

const routes: Routes = [
  {
    path: '',
    component: InstrumentsPage
  },
  {
    path: 'guitar',
    loadChildren: () => import('./guitar/guitar.module').then( m => m.GuitarPageModule)
  },
  {
    path: 'fiddle',
    loadChildren: () => import('./fiddle/fiddle.module').then( m => m.FiddlePageModule)
  },
  {
    path: 'keyboard',
    loadChildren: () => import('./keyboard/keyboard.module').then( m => m.KeyboardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstrumentsPageRoutingModule {}
