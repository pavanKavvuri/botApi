import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ChatUsersProvider } from '../../providers/chat-users/chat-users';
import { Observable } from 'rxjs/Observable';
import { ChatPage } from '../chat/chat';
import { MyChatPage } from '../my-chat/my-chat';

@Component({
  selector: 'page-chat-users',
  templateUrl: 'chat-users.html'
})
export class ChatUsersPage {

  users: Observable<any>;
  listColors: Array<string> = [
    '#3fc2c6',
    '#c63f8b',
    '#fbe08d',
    '#7847d0'
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public chatUsersProvider: ChatUsersProvider) {
  }

  ionViewDidLoad() {
    this.users = this.chatUsersProvider.getUsers();
    this.presentLoadingCustom();
  }

  launchChat(first: string, last) {
    this.navCtrl.push(ChatPage, { first, last });
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `Loading data...`,
      duration: 1000
    });

    loading.onDidDismiss(() => {

    });

    loading.present();
  }
}
