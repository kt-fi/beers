import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendCardDeckPage } from './recommend-card-deck.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendCardDeckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendCardDeckPageRoutingModule {}
