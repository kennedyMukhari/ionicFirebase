import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {

  adults:number;
  children:number;
  room:number;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }
  Adults() {
    if(((this.adults && this.children && this.room) > 3) || ((this.adults && this.children) == null)){
      let alert = this.alertCtrl.create({
        title: 'Unsuccessful!',
        subTitle: 'fields cannot be empty!',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'successful!',
        subTitle: 'Booked!',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
