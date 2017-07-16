import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

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
  user = {
    first: '',
    last: ''
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private keyboard: Keyboard
  ) {

    this.user = { first: this.navParams.get('first'), last: this.navParams.get('last') };
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
    if (this.inputMessage.trim().length !== 0) {
      this.messages.push({
        text: this.inputMessage,
        user: this.alternate
      });
      this.inputMessage = '';
      this.alternate = !this.alternate;
      this.scrollToBottom();
    }

    this.inputMessage = '';
    this.keyboard.close();

  }

  scrollToBottom() {
    let dimension = this.content.getContentDimensions();
    this.content.scrollTo(0, dimension.scrollHeight);
  }

}
