import {Injectable} from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import firebase from 'firebase'; 
@Injectable()
  
export class FirebaseAppService
{
    firebaseAnalytics:any;
    constructor(firebaseAnalytics:FirebaseAnalytics)
    {
        this.firebaseAnalytics.logEvent('home_page',{page:'HomePage'})
    .then(
      (res:any) => console.log(res)
    )
    .catch(
      (err:any)=>console.log(err)
    )
    }
    
}