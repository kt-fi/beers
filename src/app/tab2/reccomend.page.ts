import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { Beer } from '../beer';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reccomend',
  templateUrl: 'reccomend.page.html',
  styleUrls: ['reccomend.page.scss']
})
export class ReccomendPage implements OnInit{

  form?: FormGroup;

  randomBeer!: Beer;
  allBeers!: Beer[];

  constructor(private beerService: BeersService) {}

  ngOnInit(): void {
      this.beerService.beers.subscribe(beers => this.allBeers = beers);

      // CREATE FORM
      this.form = new FormGroup({
        style: new FormControl('null'),
        alcohol: new FormControl('null'),
        country: new FormControl('null'),
        taste: new FormControl('null')
      })
  }


  pickRandom(){
    let randomNumber = Math.floor(Math.random() * (this.allBeers.length))
    this.randomBeer = this.allBeers[randomNumber]
  }
}
