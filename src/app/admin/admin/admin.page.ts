import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ModalController } from '@ionic/angular';
import { Beer } from 'src/app/beer';
import { BeersService } from 'src/app/beers.service';
import { NewBeerModalComponent } from '../new-beer-modal/new-beer-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  loadedBeers!: Beer[]

  constructor(
    private beerService: BeersService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.beerService.beers.subscribe({
      next: (data: Beer[]) => this.loadedBeers = data,
      error: (err) => console.log(err)
    })
  }

  onCreateBeer(){
    this.modalCtrl.create({
      component: NewBeerModalComponent
    }).then((modal) =>{
      modal.present()
      modal.onWillDismiss()
    })
  }


  onEditBeer(beerId: string, beerItem: IonItemSliding){
    this.modalCtrl.create({
      component: NewBeerModalComponent,
      componentProps: {
        beerId: beerId
      }
    }).then((modal) =>{
      modal.present()
      beerItem.close()
    })
  }

  onDeleteBeer(beerId: string, beerItem: IonItemSliding) {
    this.alertCtrl.create({
      header: 'Are You Sure?',
      message: 'Sure you want to delete this',
      buttons: [{
        text: 'Delete',
        handler: ()=>{
          console.log('Deleted: ' + beerId)
        }
      },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(alert => {
      alert.present()
    })
    beerItem.close()
  }

}
