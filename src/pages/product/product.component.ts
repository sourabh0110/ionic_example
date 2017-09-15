import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'product.component.html',
  
})
export class Product {
  
  check=false;
  constructor(public alertCtrl: AlertController,public navCtrl?: NavController) {}
 
  testCheckboxResult:any[];
  testCheckboxOpen:boolean=true;
  showCheckBox()
  {
    let alert=this.alertCtrl.create();
    alert.setTitle("Total Products Available");
    alert.setSubTitle("Please Select Total Number of Products");
   
    alert.addInput({
      type: 'checkbox',
      label: 'Product1',
      value: 'Product 1',
      name: 'Product 1'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Product2',
      value: 'Product 2',
      name: 'Product 2'
    });

   alert.addButton({
      text: 'Okay',
      handler: data => {
        this.testCheckboxResult = data;
        console.log('Checkbox data:', this.testCheckboxResult);
        //this.model=this.testCheckboxResult;
        this.testCheckboxOpen = false;
      }
    });
    alert.addButton({

      text:'Cancel',
      handler:data =>
      {
        this.testCheckboxResult=[];
      }
    });
     alert.present();

  }

}
