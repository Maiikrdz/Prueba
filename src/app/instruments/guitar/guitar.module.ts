import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuitarPageRoutingModule } from './guitar-routing.module';

import { GuitarPage } from './guitar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuitarPageRoutingModule
  ],
  declarations: [GuitarPage]
})
export class GuitarPageModule {}
