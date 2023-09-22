import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReccomendPage } from './reccomend.page';

const routes: Routes = [
  {
    path: '',
    component: ReccomendPage,
  },
  {
    path: 'recommend-card-deck',
    loadChildren: () => import('./recommend-card-deck/recommend-card-deck.module').then( m => m.RecommendCardDeckPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
