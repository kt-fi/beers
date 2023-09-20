import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReccomendPage } from './reccomend.page';

const routes: Routes = [
  {
    path: '',
    component: ReccomendPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
