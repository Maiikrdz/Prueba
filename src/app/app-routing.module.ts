import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'animals',
    loadChildren: () => import('./animals/animals.module').then( m => m.AnimalsPageModule)
  },
  {
    path: 'instruments',
    loadChildren: () => import('./instruments/instruments.module').then( m => m.InstrumentsPageModule)
  },
  {
    path: 'instruments',
    loadChildren: () => import('./instruments/instruments.module').then( m => m.InstrumentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
