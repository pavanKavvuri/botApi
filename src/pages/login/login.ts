import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.password = '';
  }

  onLogin() {
    if (this.username === 'shobhit' && this.password === '123') {
      this.navCtrl.setRoot(HomePage);
    } else {
      console.log('err');
    }
  }

}
