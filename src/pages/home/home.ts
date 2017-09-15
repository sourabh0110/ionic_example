import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Product} from '../product/product.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
   newPage()
   {
     console.log("New Page");
     //this.navCtrl.push(Product);
     //this.navCtrl.canGoBack();
     this.navCtrl.setRoot(Product);
   }
    
}
  
