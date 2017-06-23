import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-score-card',
  templateUrl: 'score-card.html',
})
export class ScoreCardPage {

  incidents = ['7', '10', '1', '-'];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
