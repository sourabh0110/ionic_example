import { Component } from '@angular/core';
import { NavController,AlertController,ActionSheetController,NavParams } from 'ionic-angular';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from '../home/home.component'

@Component({

selector: 'page-home',
  templateUrl: 'login.component.html'
})

export class LoginPage
{
    email: string;
  password: string;
    constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFireAuth)
    {
        console.log("Inside Login");
    }
    login()
    {
        
            

        this.angfire.auth.signInWithEmailAndPassword(this.email,this.password).then((response) => {
        console.log('Login success' + JSON.stringify(response));
        let currentuser = {
          email: this.email,
          password:this.password
          //picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        console.log(currentuser);
        this.navCtrl.pop();
        //this.navCtrl.push(HomePage);
      }).catch((error) => {
        console.log(error);
    })
  };
          
      
   
  }
    
