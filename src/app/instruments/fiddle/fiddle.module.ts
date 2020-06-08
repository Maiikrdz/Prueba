import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiddlePageRoutingModule } from './fiddle-routing.module';

import { FiddlePage } from './fiddle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiddlePageRoutingModule
  ],
  declarations: [FiddlePage]
})
export class FiddlePageModule {}
