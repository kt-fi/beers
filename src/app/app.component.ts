import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle'
import { Capacitor } from '@capacitor/core'
import { SplashScreen } from '@capacitor/splash-screen'
import { Platform } from '@ionic/angular'
import { defineCustomElements } from '@ionic/pwa-elements/loader';


register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    defineCustomElements(window);
    this.initializeApp()
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      if(Capacitor.isPluginAvailable('splash-screen')){
        SplashScreen.hide()
      }
    })
  }
}
