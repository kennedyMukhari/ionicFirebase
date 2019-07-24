import { Component } from '@angular/core';
import { snapShotToArray } from '../../app/Envi';
import * as firebase from 'firebase';

/**
 * Generated class for the DetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'details',
  templateUrl: 'details.html'
})
export class DetailsComponent {
  items;
  text: string;
  ref = firebase.database().ref('hotel');
  constructor() {
    console.log('Hello DetailsComponent Component');
    this.text = 'Hello World';
    this.ref.on('value', resp => {
      this.items = snapShotToArray(resp);
    });
  }

}
