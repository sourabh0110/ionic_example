import { Component } from '@angular/core';
import { NavController,AlertController,ActionSheetController,LoadingController } from 'ionic-angular';
import {Product} from '../product/product.component';
import { FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database';  

import {LoginPage} from '../login/login.component'
import { Camera, CameraOptions } from '@ionic-native/camera';

import firebase from 'firebase'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  songs: FirebaseListObservable<any>;
  images:FirebaseListObservable<any>;
  constructor(public camera:Camera ,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public db:AngularFireDatabase, 
    public actionSheetCtrl: ActionSheetController,
    public loadCtrl:LoadingController
  )
   {
    if(!this.isLoggedin())
      {
      console.log('You are not logged in');
      this.navCtrl.push(LoginPage);
      this.navCtrl.pop();
    }
    this.songs = db.list('/songs');
    this.images=db.list('/images');

  }
  /* addSong()
   {
     console.log("New Page");
     //this.navCtrl.push(Product);
     //this.navCtrl.canGoBack();
     //this.navCtrl.setRoot(Product);
   }
    */
   
base64Image:any;
    captureImage()
    {
  const options: CameraOptions =
  {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  saveToPhotoAlbum:true,
  allowEdit:true,
  correctOrientation:true,
    
}

const image=this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
  this.base64Image = 'data:image/jpeg;base64,' + imageData;
 
}, (err) => {
 // Handle error
});
    }

uploadtoDB(image)
{
  
  let storageRef=firebase.storage().ref();
  const orgImage=image;
  const fileName=Math.floor(Date.now()/1000);
  const imageRef=storageRef.child('/images/'+fileName+orgImage+'.jpg');
  imageRef.putString(this.base64Image,firebase.storage.StringFormat.DATA_URL).then((snapshot)=>{
  console.log("Success");
  alert("Success");
    
  this.images.push({
    image:image
  })
  },(err)=>
{
    
    console.log("Image Error")
    alert("Upload Error")
}
)
    
}

downloadImg()
{
  let storage=firebase.storage();
  let storageRef=storage.ref('images/stars.jpg');
  var gsRef=storage.refFromURL('gs://my-app-ionic-c238f.appspot.com/images');
  var httpsRef=storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg')

  var url:any = 'https://firebasestorage.googleapis.com/v0/b/my-app-ionic-c238f.appspot.com/o/images%2Fstars.jpg?alt=media&token=3d302cf6-9eba-4a02-94e4-98bb1ddec564'
  storageRef.child('images/stars.jpg').getDownloadURL().then(function(url)
{
    var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();

  
  

})

}

    addSong(){
  let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Enter a name for this new song you're so keen on adding",
    inputs: [
      {
        name: 'bandName',
        placeholder: 'Band Name'
      },
      {
        name: 'songName',
        placeholder: 'Song Name'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role:'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        role:'save',
        handler: data => {
          this.songs.push({          
              bandName: data.bandName,
              songName: data.songName
          });
        }
      }
    ]
  });
  prompt.present();
}
isLoggedin()
   {
      if (window.localStorage.getItem('currentuser')) {
      return true;
    }
   }
    showOptions(songId, songName,bandName) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Update title',
        handler: () => {
          this.updateSong(songId ,songName,bandName);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

removeSong(songId)
{
  this.songs.remove(songId);
}

updateSong(songId,songName,bandName){
  let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Update the name for this song",
    inputs: [
      {
        name: 'bandName',
        value: bandName
      },
      {
        name: 'songName',
        value: songName  
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.songs.update(songId, {
            bandName: data.bandName,
            songName: data.songName
          });
        }
      }
    ]
  });
  prompt.present();
}




}
  
