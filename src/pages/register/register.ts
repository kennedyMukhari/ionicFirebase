import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapShotToArray } from '../../app/Envi';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  person = {};
  items;
  ref = firebase.database().ref('hotel');
  uid;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.ref.on('value', resp=>{
      this.items = snapShotToArray(resp);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  userRegister() {
    firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value)
    .then(data => {
      console.log("User registered succcessfully", data)
      let alert = this.alertCtrl.create({
        title: 'New User!',
        subTitle: 'Your registration is successfull!',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(LoginPage);
    })
    .catch(error => {
      console.log("Did not register user",error)
    })
    console.log(this.email.value);
  }

  createPerson(item) {
    if(item !==undefined && item !==null){
      let newItem = this.ref.push();
      newItem.set(item);
      this.person ={}
    }
  }
  goToSignIn() {
    this.navCtrl.push(LoginPage);
  }
  cancel() {
    this.navCtrl.push(HomePage);
  }
}
