import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';

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
      this.beerService.beers.subscribe(data => {
        if(data){
          setTimeout(()=>{
            this.loading = false;
          },3000)
        }
      })
  }

}
