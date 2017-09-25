import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.component';
import {Product} from '../pages/product/product.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {LoginPage} from '../pages/login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

/*

<script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAoSSkvWt2aj511dRVW1onYc8v-axItQ_0",
    authDomain: "my-app-ionic-c238f.firebaseapp.com",
    databaseURL: "https://my-app-ionic-c238f.firebaseio.com",
    projectId: "my-app-ionic-c238f",
    storageBucket: "",
    messagingSenderId: "363972019128"
  };
  firebase.initializeApp(config);
</script>
*/ 

export const firebaseConfig = {
  projectID:"my-app-ionic-c238f",
  apiKey: "AIzaSyAoSSkvWt2aj511dRVW1onYc8v-axItQ_0",
  authDomain: "my-app-ionic-c238f.firebaseapp.com",
  databaseURL: "https://my-app-ionic-c238f.firebaseio.com",
  storageBucket: "gs://my-app-ionic-c238f.appspot.com",
  messagingSenderId: "363972019128"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Product,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   Product,
   LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,Device,FirebaseAnalytics,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

