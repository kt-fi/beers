import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  loading: boolean = true;
  constructor(private beerService: BeersService ) {}


  ngOnInit(){
      this.beerService.getBeers();
      this.beerService.beers.subscribe(data =>{
        setTimeout(()=>{
          this.loading = false;
        }, 5000)
      })
  }

}
