import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Beer } from 'src/app/beer';
import { BeersService } from 'src/app/beers.service';

@Component({
  selector: 'app-menu-type',
  templateUrl: './menu-type.page.html',
  styleUrls: ['./menu-type.page.scss'],
})
export class MenuTypePage implements OnInit {

  beerType!: string;
  beers!: Beer[] | any;

  constructor(
    private beersService: BeersService,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.beerType = this.route.snapshot.params['type']
    this.beersService.beers.pipe(map(beers => beers.filter(beer=> beer.type == this.route.snapshot.params['type'] )))
      .subscribe(beers => this.beers = beers)

  }

}
