import {Injectable} from '@angular/core'
import { FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import * as services from '../services/app.loader.service';
import {Device} from '@ionic-native/device';
import {AlertController } from 'ionic-angular';

@Injectable()

export class FirebaseServices
{
    users: FirebaseListObservable<any>;

    constructor(private db:AngularFireDatabase,private preLoader:services.AppService,private device:Device,private alertCtrl:AlertController)
    {
        this.users = db.list('/users'); 
        this.getUsers();
    }

    getUsers()
    {
        this.preLoader.displaypreLoader();
        const uUID=this.device.uuid;
        const model=this.device.model;
        const pf=this.device.platform;
        const ver=this.device.version;
        const usersRef=firebase.database().ref();
      
        if(!this.users==null)
        {console.log("Users"+this.users)}
  
        usersRef.child('users').orderByChild('uuid').equalTo(uUID).once('value',snapshot => {
          const userData = snapshot.val();
          if (userData){
            
            let alert=this.alertCtrl.create({
                title:'Welcome + {$uuid}',
                buttons:['Confirm']
              })
              alert.present();
           console.log("exists!");
           console.log("User Data is: "+userData);
          }
          else
            {
              if(this.device.uuid==null)
                {
                  let alert=this.alertCtrl.create({
                    title:'No Device Found/Couldnt Add User -> Device: '+ this.device.uuid,
                    buttons:['Dismiss']
                  })    
                  alert.present();
                }
              else
              {
                console.log("No Users Found,adding this user!");
                this.users.push({          
                  uuid: uUID,
                  model:model,
                  platform:pf,
                  version:ver
              });
              }
              
            }
            this.preLoader.hidepreLoader();
  });
    }
}