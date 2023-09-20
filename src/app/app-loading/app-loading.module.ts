import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppLoadingPageRoutingModule } from './app-loading-routing.module';

import { AppLoadingPage } from './app-loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppLoadingPageRoutingModule
  ],
  declarations: [AppLoadingPage]
})
export class AppLoadingPageModule {}
