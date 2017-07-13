import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GroupSelectionProvider } from '../../providers/group-selection/group-selection';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: GroupSelectionProvider) {
  }

  ionViewDidLoad() {
    this.service.currentGroup().subscribe((val) => {
      console.log('TEST -> ', val);
    });
  }

}
