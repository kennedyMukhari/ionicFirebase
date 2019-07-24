import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AddhotelPage } from '../addhotel/addhotel';
import { roomsMod } from '../../app/roomsMod';


/**
 * Generated class for the RoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage {


  url: string;
  room = {} as roomsMod;
  storageRef = firebase.storage().ref();
  addRooms =  firebase.database().ref('rooms/');
  myphoto: string;



  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
     private camera: Camera,
     public loading: LoadingController
     ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomsPage');
  }

  takePhoto(sourcetype: number) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: sourcetype,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 500,
      targetWidth: 500
    }
    
    this.camera.getPicture(options).then((myphoto) => {
     // imageData is either a base64 encoded string or a file URL
     // If it's base64 (DATA_URL):
     let imageUploaded = 'data:image/jpeg;base64,' + myphoto;
     
     this.myphoto = imageUploaded;
     
    }, (err) => {
     // Handle error
    });
  }
  upload() {
    let loaders = this.loading.create({
      content: 'Uploading, Please wait...',
      duration: 3000
    });
    let storageRef = firebase.storage().ref();

    const filename = Math.floor(Date.now() / 1000);

    const imageRef = storageRef.child(`my-rooms/${filename}.jpg`);
    loaders.present()
    imageRef.putString(this.myphoto, firebase.storage.StringFormat.DATA_URL)
    .then((snapshot) => {
      console.log('image uploaded');
      this.url = snapshot.downloadURL
      let alert = this.alertCtrl.create({
        title: 'Image Upload', 
        subTitle: 'Image Uploaded to firebase',
        buttons: ['Ok']
      }).present();
    });
  }
  
  createRooms(room: roomsMod) {
    console.log(this.upload());
    let alert = this.alertCtrl.create({
      title: 'adding a Room',
      subTitle: 'Room successfully added!',
      buttons: ['Ok']
    })
   if(this.url != '') {
     let newRooms = this.addRooms.push();
   newRooms.set({
     RoomType: room.roomtype,
     Price: room.price,
     Description: room.description,
     image: this.myphoto
   });
    this.room.price = null;
    this.room.roomtype = '';
    this.room.description = '';
   alert.present();
   this.navCtrl.setRoot(AddhotelPage);
   }else {
    let alert = this.alertCtrl.create({
      title: 'Warning!',
      subTitle: 'Upload image first.',
      buttons: ['Ok']
    })
    alert.present();
    this.navCtrl.setRoot(AddhotelPage);
   }
  }
}
