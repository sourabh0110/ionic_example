import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Product} from '../product/product.component';
import { FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';  


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  songs: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,db:AngularFireDatabase) {
    this.songs = db.list('/songs');

  }
   addSong()
   {
     console.log("New Page");
     //this.navCtrl.push(Product);
     //this.navCtrl.canGoBack();
     //this.navCtrl.setRoot(Product);
   }
    
}
  
