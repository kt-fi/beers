import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { Beer } from '../beer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reccomend',
  templateUrl: 'reccomend.page.html',
  styleUrls: ['reccomend.page.scss']
})
export class ReccomendPage implements OnInit{

  form!: FormGroup;

  randomBeer!: Beer;
  allBeers!: Beer[];
  filteredBeers: Beer[] = [];

  filterItems: any = {
    styles: [],
    countries: [],
    flavours: []
  }


  constructor(private beerService: BeersService, private route: Router) {}

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

  resetChoices(){
    this.clearForm()
    this.filteredBeers = []
  }


  submitForm(){
    this.beerService.runFilters(this.form.value)
    this.route.navigateByUrl('tabs/recommend/recommend-card-deck')
  }

  clearForm() {
    this.form.reset()
  }



}
