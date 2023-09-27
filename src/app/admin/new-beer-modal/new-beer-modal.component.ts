import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/beer';
import { BeersService } from 'src/app/beers.service';

@Component({
  selector: 'app-new-beer-modal',
  templateUrl: './new-beer-modal.component.html',
  styleUrls: ['./new-beer-modal.component.scss'],
})
export class NewBeerModalComponent  implements OnInit, OnDestroy {

  imageUrl?: string;

  newBeerForm!: FormGroup;
  beerId?: string;
  selectedBeer!: Beer;
  editMode:boolean = false;

  subscription!: Subscription;

  constructor(
    private modalCtrl: ModalController,
    private beerService: BeersService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,

    ) { }

  ngOnInit() {

    if(this.beerId){
      this.editMode = true;
      this.subscription = this.beerService.getSelectedBeer(this.beerId).subscribe((beer:Beer) =>{
        this.selectedBeer = beer;
        this.imageUrl = beer.imageUrl;
        setTimeout(()=>{
          this.addNotes(beer)
        },1000)

      })

    }else{
      this.editMode = false;
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
        notes: new FormArray([]),
      })
  }


  addNotes(beer: Beer){
    console.log(beer.notes)
      const existingNotes = beer.notes;
      let copyOfNotes = existingNotes;
      copyOfNotes.map(note=>{
         this.newBeerForm.value.notes.push(new FormControl(note))
      })

    }


  addNote(note: any){
    console.log(note.value)

    this.newBeerForm.value.notes.push(new FormControl(note.value))

  }

  removeNote(index: number){
    this.newBeerForm.value.notes.splice(index, 1)
  }


  cancel(){
    this.modalCtrl.dismiss()
  }

  confirm(){
    console.log(this.newBeerForm.value.notes)
    let notes = this.newBeerForm.value.notes.map((note: any) =>{
      return note.value
    })
    let newBeer = new Beer(
      '0',
      this.newBeerForm.value.name,
       this.newBeerForm.value.category,
       this.newBeerForm.value.style,
       this.newBeerForm.value.country,
       this.newBeerForm.value.alcohol,
       this.newBeerForm.value.imageUrl,
       this.newBeerForm.value.color,
       this.newBeerForm.value.description,
      notes )
    this.alertCtrl.create({
      header: 'Are You Sure',
      message: 'Sure you want to confirm',
      buttons: [{
        text: 'OK',
        role: 'confirm',
        handler: ()=>{
          this.loadingCtrl.create({
            keyboardClose: true,
            message: "Saving Beer"
          }).then(loader => {
            loader.present()
            if(!this.editMode){
              this.beerService.createBeer(newBeer)
            }else{
              this.beerService.editBeer(this.beerId!, newBeer)
            }
            loader.dismiss()
          })
          this.modalCtrl.dismiss()
        }
      }, {
      text: 'Cancel',
      role: 'cancel'
    }]
    }).then(alert =>{
      alert.present()
    })

  }

  ngOnDestroy(): void {

  }
}
