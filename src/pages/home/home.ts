import { Component } from '@angular/core';
import { NavController,AlertController,ActionSheetController } from 'ionic-angular';
import {Product} from '../product/product.component';
import { FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';  


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  songs: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,db:AngularFireDatabase, public actionSheetCtrl: ActionSheetController) {
    this.songs = db.list('/songs');

  }
  /* addSong()
   {
     console.log("New Page");
     //this.navCtrl.push(Product);
     //this.navCtrl.canGoBack();
     //this.navCtrl.setRoot(Product);
   }
    */
    addSong(){
  let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Enter a name for this new song you're so keen on adding",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.songs.push({          
              title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}
    showOptions(songId, songTitle) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete Song',
        role: 'destructive',
        handler: () => {
          this.removeSong(songId);
        }
      },{
        text: 'Update title',
        handler: () => {
          this.updateSong(songId, songTitle);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

removeSong(songId)
{
  this.songs.remove(songId);
}

updateSong(songId, songTitle){
  let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Update the name for this song",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title',
        value: songTitle
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.songs.update(songId, {
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}




}
  
