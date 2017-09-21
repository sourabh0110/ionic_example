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
    constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFireAuth,private alertController:AlertController)
    {
        console.log("Inside Login");
    }
    login()
    {
        
            

        this.angfire.auth.signInWithEmailAndPassword(this.email,this.password).then((response) => {
            this.alertController.create({

                title:'Confirm!',
                message: 'Login Successfull',
                buttons:
                [
                    {
                        text:'Ok!',
                        role:'Ok',
                        handler:data =>
                        {
                            console.log("Confirmed");
                        }
                        
                    }
                ]

            })
            
        console.log('Login success' + JSON.stringify(response));
        let currentuser = {
          email: this.email,
          password:this.password
          //picture: response.auth.photoURL
        }
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        console.log(currentuser);
        this.navCtrl.pop();
        //this.navCtrl.push(HomePage);
      }).catch((error) => {

        this.alertController.create({

            title:'Alert!',
            message:'Invalid Credentials',
            buttons:[
                {
                    text:'Ok!',
                    role:'Cancel',
                    handler:data=>
                    {
                        console.log("Invalid Creds!");
                    }

                }
            ]
        })
        console.log(error);

    })
  };
          
      
   
  }
    
