import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private _beers: Beer[] = [
    new Beer('Achel', 'Strong Blonde', 'Belgium', 7.0, ['fruity', 'hoppy'])
  ]

  constructor() { }

  public get beers(){
    return this._beers;
  }

}
