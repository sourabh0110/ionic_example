import {Injectable} from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import firebase from 'firebase'; 
import {LoadingController} from 'ionic-angular'

@Injectable()
  
export class AppService
{
    //firebaseAnalytics:any;
    private loading:any;
    constructor(private fbaseAnalytics:FirebaseAnalytics,private loadingController:LoadingController)
    {
        this.fbaseAnalytics.logEvent('home_page',{page:'HomePage'})
    .then(
      (res:any) => console.log(res)
    )
    .catch(
      (err:any)=>console.log(err)
    )
    }

    displaypreLoader()
    {
      this.loading=this.loadingController.create({
          content: `Fetching Details..`,
        })
        this.loading.present();
    }

    hidepreLoader()
    {
      this.loading.dismiss();
    }
    
}
export class NextService
{
  
}