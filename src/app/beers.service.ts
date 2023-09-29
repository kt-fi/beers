import { Injectable } from '@angular/core';
import { Beer } from './beer';
import { BehaviorSubject, Observable, Subject, delay, map, switchMap, take, tap } from 'rxjs';
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private url  = environment.url;
  public selectedBeers = new Subject<Beer[]>()
  public _beers: BehaviorSubject<Array<any>> = new BehaviorSubject<Beer[]>([])

  constructor(private http: HttpClient) { }

  public get beers(){
    return this._beers.asObservable();
  }

  getBeers(){
    this.http.get<Beer[]>(`${this.url}/getAllBeers`).pipe(take(1)).subscribe((data:Beer[])=>{
      this._beers.next(data)
    })
  }

  createBeer(beer: Beer){
       return this.http.post(`${this.url}/createBeer`, beer).pipe(switchMap(res=>{
        let newBeer = res;
        return this.beers;
       }), take(1), tap(beers =>{
        this._beers.next(beers.concat(beer))
       }))
      //.subscribe(data => {
      //   const currentValue = this._beers.value;
      //   const updatedValue = [...currentValue, data]
      //   this._beers.next(updatedValue)
      // })
  }

  getSelectedBeer(beerId: string): Observable<Beer>{
    return this.beers.pipe(take(1),map((beers: Beer[])=>{
      return <Beer>{...beers.find((beer: Beer) => {
        return beer.beerId === beerId
      })}
    }))
  }


  editBeer(beerId:string, beerData: Beer) {
    const currentBeers = [...this._beers.value];
    let updatedBeers = currentBeers;
    this.http.put<Beer>(`${this.url}/editBeer/${beerId}`, beerData).subscribe((data: Beer) => {

      let beerIndex = currentBeers.findIndex(beer =>{
        return beer.beerId === beerId
      })
      updatedBeers[beerIndex] = data;
    })
    this._beers.next(updatedBeers)
  }

  deleteBeer(beerId:String){
   this.http.delete<Beer>(`${this.url}/deleteBeer/${beerId}`).subscribe((data: Beer) => {
    const currentValue = this._beers.value;
    let updatedValue = currentValue.filter(beer =>{
      return beer.beerId != beerId
    })
    this._beers.next(updatedValue)
   })
  }


  runFilters(values:any){
      return this.beers.pipe(take(1), delay(2000), map(beers=>{
        let toFilter = [...beers]

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
      })).subscribe(filteredBeers => {
        this.selectedBeers.next(filteredBeers)
      })




  }

  }


