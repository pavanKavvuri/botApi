import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatUsersProvider } from '../../providers/chat-users/chat-users';
import { Observable } from 'rxjs/Observable';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-chat-users',
  templateUrl: 'chat-users.html'
})
export class ChatUsersPage {

  users: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public chatUsersProvider: ChatUsersProvider) {
  }

  ionViewDidLoad() {
    this.users = this.chatUsersProvider.getUsers();
  }

  launchChat(first: string, last) {
    this.navCtrl.push(ChatPage, { first, last });
  }
}
