import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Product} from '../pages/product/product.component';
import { AngularFireModule } from 'angularfire2';
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
  storageBucket: "",
  messagingSenderId: "363972019128"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Product
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   Product
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

