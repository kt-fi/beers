import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-loading',
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.scss'],
})
export class AppLoadingComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  adminRoute(){
    this.router.navigateByUrl('admin')
  }
}
