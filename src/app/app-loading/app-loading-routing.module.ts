import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLoadingPage } from './app-loading.page';

const routes: Routes = [
  {
    path: '',
    component: AppLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppLoadingPageRoutingModule {}
