import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
  },
  {
    path: 'category/:category',
    loadChildren: ()=> import('../menu/menu-type/menu-type.module').then(m => m.MenuTypePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPageRoutingModule {}
