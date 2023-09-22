import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendCardDeckPageRoutingModule } from './recommend-card-deck-routing.module';

import { RecommendCardDeckPage } from './recommend-card-deck.page';
import { MaxWordsPipe } from 'src/app/max-words.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendCardDeckPageRoutingModule
  ],
  declarations: [RecommendCardDeckPage, MaxWordsPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecommendCardDeckPageModule {}
