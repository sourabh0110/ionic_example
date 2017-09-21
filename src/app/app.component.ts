import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Device} from '@ionic-native/device';
import { HomePage } from '../pages/home/home.component';
import { FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';  
import firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage: any = HomePage;
  users: FirebaseListObservable<any>;
  constructor(private device:Device ,platform: Platform, statusBar: StatusBar, private splashScreen: SplashScreen,db:AngularFireDatabase) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //this.splashScreen.show();
      // let status bar overlay webview
      statusBar.overlaysWebView(true);
      // set status bar to white
      statusBar.backgroundColorByHexString('#ffffff');
      
      //Device Info:
      if(!this.device.uuid==null)
      console.log("UUID: "+ this.device.uuid);
      //Send Device ID to FB db table
      this.users = db.list('/users');  
      var uUID=this.device.uuid;
      var getUID=firebase.database().ref().child('users').orderByChild('uuid')
      //https://my-app-ionic-c238f.firebaseio.com/users/-KuUG9rdsLqRIr8w7lfO
        //alert(getUID);
    });
    this.checkUID();
    //this.getUsers();
  }
   checkUID()
      {
       /*
        
      console.log("User Id: "+getUID);
      var uUID=this.device.uuid;
      var model=this.device.model;
      var pf=this.device.platform;
      var ver=this.device.version;
        getUID.once('value',function(snapshot){
          if(!snapshot.hasChild(uUID) )
            {
              alert('Exists')
            }
            else
              {
                this.users.push({          
              uuid: uUID,
              model:model,
              platform:pf,
              version:ver
          });
              }
        });*/
      } 

      getUsers(){
          console.log("Users"+this.users)
  }
}

