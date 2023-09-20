import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuTypePageRoutingModule } from './menu-type-routing.module';

import { MenuTypePage } from './menu-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTypePageRoutingModule
  ],
  declarations: [MenuTypePage]
})
export class MenuTypePageModule {}
