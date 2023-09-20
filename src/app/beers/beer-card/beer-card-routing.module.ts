import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerCardPage } from './beer-card.page';

const routes: Routes = [
  {
    path: '',
    component: BeerCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeerCardPageRoutingModule {}
