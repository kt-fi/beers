import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

import { Beer } from 'src/app/beer';
import { BeersService } from 'src/app/beers.service';

@Component({
  selector: 'app-recommend-card-deck',
  templateUrl: './recommend-card-deck.page.html',
  styleUrls: ['./recommend-card-deck.page.scss'],
})
export class RecommendCardDeckPage implements OnInit {


  filteredBeers: Beer[] = [];

  slideConfig = {
    effect: 'cards',
    centeredSlides: true,
    autoHeight: true
  }

  constructor(
    private beerService: BeersService,
     private navCtrl: NavController,
     private loaderCtrl: LoadingController,
     private route: Router) { }

  ngOnInit() {
    this.loaderCtrl.create({
      keyboardClose: true,
      message: 'Beers Loading'
    }).then(loadCtrl =>{
      loadCtrl.present()
      setTimeout(()=> {
      if(this.filteredBeers.length === 0){
        loadCtrl.dismiss()
        this.route.navigateByUrl('/tabs/recommend')
      }
    }, 6000)
      this.beerService.selectedBeers.subscribe({
        next: (beers)=> {
          this.filteredBeers = beers
          loadCtrl.dismiss()
        },
        error: (err) => console.log(err)
      })

    })

  }

  onTryAgain(){
    this.navCtrl.navigateBack('/tabs/recommend')
  }

}
