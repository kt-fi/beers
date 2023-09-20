import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { Beer } from '../beer';

@Component({
  selector: 'app-reccomend',
  templateUrl: 'reccomend.page.html',
  styleUrls: ['reccomend.page.scss']
})
export class ReccomendPage implements OnInit{

  randomBeer!: Beer;
  allBeers!: Beer[];

  constructor(private beerService: BeersService) {}

  ngOnInit(): void {
      this.beerService.beers.subscribe(beers => this.allBeers = beers)
  }


  pickRandom(){
    let randomNumber = Math.floor(Math.random() * (this.allBeers.length))
    this.randomBeer = this.allBeers[randomNumber]
  }
}
