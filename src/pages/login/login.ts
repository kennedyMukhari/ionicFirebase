import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild("email") email;
  @ViewChild("password") password;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  userLogin() {
    firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value)
    .then(data =>{
      console.log('User signed in successful', firebase.auth().currentUser);
      let alert = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'User logged in!',
        buttons: ['OK']
      });
      alert.present();
      // this.navCtrl.push(DetailsPage);
    })
    ,error => {
      console.log("Error signing in", error);
    };
  }
  goToSignUp(){
   this.navCtrl.push(RegisterPage);
  }
  cancel() {
    this.navCtrl.push(HomePage);
  }
}
