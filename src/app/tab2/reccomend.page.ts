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

  form!: FormGroup;

  randomBeer!: Beer;
  allBeers!: Beer[];
  filteredBeers!: Beer[];

  filterItems: any = {
    styles: [],
    countries: [],
    flavours: []
  }

  styles!: string[];
  countries!: string[];
  flavours!: string[];

  constructor(private beerService: BeersService) {}

  ngOnInit(): void {
      this.beerService.beers.subscribe(beers => this.allBeers = beers);

      // CREATE FORM
      this.form = new FormGroup({
        style: new FormControl(null),
        alcohol: new FormControl(null),
        country: new FormControl(null),
        flavour: new FormControl(null)
      })

      this.getSelectorOptions()
  }


// REFACTOR -------------------------------

getSelectorOptions(){
  let allBeersCopy = [...this.allBeers]
  let style:string[] = []
  let country:string[]  =  []
  let notes:string[] =[]

  allBeersCopy.forEach(beer => {
      style.push(beer.style)
      country.push(beer.country)
  })
  allBeersCopy.forEach(beer => {
    beer.notes.forEach(note => {
      notes.push(note)
    })
  })

  this.filterItems.styles = this.removeDuplicates(style)
  this.filterItems.countries = this.removeDuplicates(country)
  this.filterItems.flavours = this.removeDuplicates(notes)
}


removeDuplicates(arr:any) {
  return arr.filter((item:any, index:any) => arr.indexOf(item) === index);
}
// ----------------------------------------------


  pickRandom(){
    let randomNumber = Math.floor(Math.random() * (this.filteredBeers.length))
    this.randomBeer = this.filteredBeers[randomNumber]
  }

  submitForm(){
    console.log(this.form.value)
    this.filteredBeers = this.runFilters(this.form.value)
    this.pickRandom()
  }

  clearForm() {
    this.form.reset()
  }

  runFilters(values:any){
    let toFilter: any[] = [...this.allBeers]

    toFilter = toFilter.filter(beer => {
      if(values.style === 'any' || values.style === null){
        return toFilter;
      }
      return beer.style === values.style;
    })
    toFilter = toFilter.filter(beer => {
      if(values.country === 'any' || values.country === null){
        return toFilter;
      }
      return beer.country === values.country;
    })
    toFilter = toFilter.filter(beer => {
      if(values.flavour === 'any' || values.flavour === null){
        return toFilter;
      }
    return beer.notes.find((notes:any) => notes === values.flavour)
    })

    toFilter = toFilter.filter(beer => {
      if(values.alcohol === 'any' || values.alcohol === null){
        return toFilter;
      }

    if(values.alcohol == '0'){
      return beer.alcohol == 0;
    }else if(values.alcohol == '1'){
      return beer.alcohol >= 1 && beer.alcohol <= 5
    }else if(values.alcohol == '2'){
      return beer.alcohol >= 5 && beer.alcohol <= 7
    }else if(values.alcohol == '3'){
      return beer.alcohol >= 7 && beer.alcohol <= 9
    }else if(values.alcohol == '4'){
      return beer.alcohol >= 9
    }else {
      return;
    }
    })

    return toFilter;
  }





}
