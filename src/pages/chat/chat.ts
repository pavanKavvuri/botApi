import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

interface Message {
  text: string;
  user: boolean;
};

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  @ViewChild(Content) content: Content;

  inputMessage: string = '';
  messages: Array<Message> = [];
  alternate: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messages = [
      {
        text: 'Hi',
        user: true
      },
      {
        text: 'How are you?',
        user: false
      },
      {
        text: 'Doing fine.',
        user: true
      }
    ]
  }

  ionViewDidLoad() {
  }

  onSend() {
    this.messages.push({
      text: this.inputMessage,
      user: this.alternate
    });
    this.inputMessage = '';
    this.alternate = !this.alternate;
    this.scrollToBottom();
  }

  scrollToBottom() {
    let dimension = this.content.getContentDimensions();
    this.content.scrollTo(0, dimension.scrollHeight);
  }

}
