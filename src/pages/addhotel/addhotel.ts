import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapShotToArray } from '../../app/Envi';
import { PopoverController } from 'ionic-angular';
import { BookingsPage } from '../bookings/bookings';

/**
 * Generated class for the AddhotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addhotel',
  templateUrl: 'addhotel.html',
})
export class AddhotelPage {

  rooms = {};
  items;
  getRooms: any;
  ref = firebase.database().ref('rooms/');

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
      public popoverCtrl: PopoverController
      ) {
    this.ref.on('value', resp => {
      this.getRooms = snapShotToArray(resp);
      console.log(this.getRooms);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddhotelPage');
  }
  goToBookingsPage() {
    this.navCtrl.push(BookingsPage);
  }
 
}
