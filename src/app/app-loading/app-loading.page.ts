import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-loading',
  templateUrl: './app-loading.page.html',
  styleUrls: ['./app-loading.page.scss'],
})
export class AppLoadingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['tabs'])
    },2000)
  }

}
