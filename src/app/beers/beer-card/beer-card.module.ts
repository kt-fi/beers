import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeerCardPageRoutingModule } from './beer-card-routing.module';

import { BeerCardPage } from './beer-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeerCardPageRoutingModule
  ],
  declarations: [BeerCardPage]
})
export class BeerCardPageModule {}
