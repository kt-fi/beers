import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/beer';
import { BeersService } from 'src/app/beers.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.page.html',
  styleUrls: ['./beer-card.page.scss'],
})
export class BeerCardPage implements OnInit {

  selectedBeer!: Beer| any;

  constructor(private beerService: BeersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.beerService.getSelectedBeer(this.route.snapshot.params['id']).subscribe({
      next: (data) => this.selectedBeer = data
    })
  }

}
