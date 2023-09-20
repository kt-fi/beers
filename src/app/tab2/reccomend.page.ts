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

  styles!: string[];
  countries!: string[];
  flavours!: string[];

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

      this.styles = this.getStyles();
      this.countries = this.getCountries();
      this.flavours = this.getFlavours()
  }



getStyles(){
  let tempArray:string[] = []
  this.allBeers.forEach(beer => {
       tempArray.push(beer.style)
  })
  tempArray = this.removeDuplicates(tempArray)
  return tempArray;
}

getCountries(){
  let tempArray:string[] = []
  this.allBeers.forEach(beer => {
       tempArray.push(beer.country)
  })
  tempArray = this.removeDuplicates(tempArray)
  return tempArray;
}

getFlavours(){
  let tempArray: string[] = [];
  this.allBeers.forEach(beer => {
    beer.notes.forEach(note => {
      tempArray.push(note)
    })
  })
  tempArray = this.removeDuplicates(tempArray)
  return tempArray
}


removeDuplicates(arr:any) {
  return arr.filter((item:any, index:any) => arr.indexOf(item) === index);
}

  pickRandom(){
    let randomNumber = Math.floor(Math.random() * (this.allBeers.length))
    this.randomBeer = this.allBeers[randomNumber]
  }




}
