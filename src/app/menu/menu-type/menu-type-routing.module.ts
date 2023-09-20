import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTypePage } from './menu-type.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTypePage
  },
  {
    path: ':id',
    loadChildren: () => import('../../beers/beer-card/beer-card.module').then(m => m.BeerCardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTypePageRoutingModule {}
