import { Injectable } from '@angular/core';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private _beers: Beer[] = [
    new Beer('Achel', 'Strong Blonde', 'Belgium', 7.0, "https://brewhouse.es/wp-content/uploads/2021/01/ACHE101.3.jpg" ,['fruity', 'hoppy']),
    new Beer('Achel', 'Strong Blonde', 'Belgium', 7.0, "https://brewhouse.es/wp-content/uploads/2021/01/ACHE101.3.jpg" ,['fruity', 'hoppy']),
    new Beer('Achel', 'Strong Blonde', 'Belgium', 7.0, "https://brewhouse.es/wp-content/uploads/2021/01/ACHE101.3.jpg" ,['fruity', 'hoppy']),
  ]

  constructor() { }

  public get beers(){
    return this._beers;
  }

}
