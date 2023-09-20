import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  loading: boolean = true;

  constructor() {}

ngOnInit(): void {
    setTimeout(()=>{
      this.loading = false;
    },7000)
}

}
