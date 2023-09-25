import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Beer } from 'src/app/beer';
import { BeersService } from 'src/app/beers.service';

@Component({
  selector: 'app-new-beer-modal',
  templateUrl: './new-beer-modal.component.html',
  styleUrls: ['./new-beer-modal.component.scss'],
})
export class NewBeerModalComponent  implements OnInit {

  newBeerForm!: FormGroup;
  beerId?: string;
  selectedBeer!: Beer;

  constructor(
    private modalCtrl: ModalController,
    private beerService: BeersService,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {

    if(this.beerId){
      this.beerService.getSelectedBeer(this.beerId).subscribe((beer:Beer) =>{
        this.selectedBeer = beer;
      })
    }

      this.newBeerForm = new FormGroup({
        name: new FormControl(this.selectedBeer ? this.selectedBeer.name : null, [Validators.required]),
        category: new FormControl(this.selectedBeer ? this.selectedBeer.category : null, [Validators.required]),
        style: new FormControl(this.selectedBeer ? this.selectedBeer.style : null, [Validators.required]),
        country: new FormControl(this.selectedBeer ? this.selectedBeer.country : null, [Validators.required]),
        alcohol: new FormControl(this.selectedBeer ? this.selectedBeer.alcohol : null, [Validators.required]),
        imageUrl: new FormControl(this.selectedBeer ? this.selectedBeer.imageUrl : null, [Validators.required]),
        color: new FormControl(this.selectedBeer ? this.selectedBeer.color : null, [Validators.required]),
        description: new FormControl(this.selectedBeer ? this.selectedBeer.description : null, [Validators.required]),
        notes: new FormControl(this.selectedBeer ? this.selectedBeer.notes : null, [Validators.required]),
      })
  }


  cancel(){
    this.modalCtrl.dismiss()
  }

  confirm(){
    this.alertCtrl.create({
      header: 'Are You Sure',
      message: 'Sure you aant to confirm',
      buttons: [{
        text: 'OK',
        role: 'confirm',
        handler: ()=>{
          this.modalCtrl.dismiss()
        }
      },
    {
      text: 'Cancel',
      role: 'cancel'
    }]
    }).then(alert =>{
      alert.present()
    })

  }
}
