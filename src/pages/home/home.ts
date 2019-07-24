import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapShotToArray } from '../../app/Envi';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { AddhotelPage } from '../addhotel/addhotel';
import { GalleryPage } from '../gallery/gallery';
import { RoomsPage } from '../rooms/rooms';
import { BookingsPage } from '../bookings/bookings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  person = {};
  items;
  ref = firebase.database().ref('hotel');

  constructor(public navCtrl: NavController) {
    this.ref.on('value', resp=>{
      this.items = snapShotToArray(resp);
    });
  }
  addItem(item) {
    if(item !==undefined && item !==null ){
      let newItem =this.ref.push();
      newItem.set(item);
      this.person = {};
    }
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }
  goToLogin() {
    this.navCtrl.push(LoginPage);
  }
  goToAddHotel() {
    this.navCtrl.push(AddhotelPage);
  }
  goToGallery() {
    this.navCtrl.push(GalleryPage);
  }
  goToRooms() {
    this.navCtrl.push(RoomsPage);
  }
  
}
