import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
}) 
export class LoginPage {

  username: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController) {

    this.username = this.password = '';
    this.menu.enable(false);

  }

  onLogin() {
    if (this.username === 'cio' && this.password === 'cio@123') {
      this.navCtrl.setRoot(HomePage);
      this.menu.enable(true);
    } else {
      console.log('err');
    }
  }

}
