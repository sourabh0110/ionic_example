import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home.component';
import {Device} from '@ionic-native/device';
import * as fbServices from '../app/services/app.firebase.service';//For FB, imported PreLoader Inside this Service 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage: any = HomePage;
  constructor(
    private device:Device,
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private fbserv:fbServices.FirebaseServices  
  )
     {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //this.splashScreen.hide();
      // let status bar overlay webview
      statusBar.overlaysWebView(true);
      // set status bar to white
      statusBar.backgroundColorByHexString('#ffffff');
      //Device Info:
      if(!this.device.uuid==null)
      console.log("UUID: "+ this.device.uuid);
      //Send Device ID to FB db table by creating /users 
    },
    err=>
    {
        console.log("Onload Issues");
    } 
  );
  }

   
}

