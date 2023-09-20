import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'type',
    loadChildren: () => import('./menu/menu-type/menu-type.module').then( m => m.MenuTypePageModule)
  },
  {
    path: 'beer-card',
    loadChildren: () => import('./beers/beer-card/beer-card.module').then( m => m.BeerCardPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
