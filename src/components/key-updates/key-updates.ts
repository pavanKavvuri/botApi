import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'key-updates',
  templateUrl: 'key-updates.html'
})
export class KeyUpdatesComponent {


  listColors: Array<string> = [
    '#3fc2c6',
    '#c63f8b',
    '#fbe08d',
    '#7847d0'
  ];

  keyUpdates: Array<string> = [
    'Financial Year-End Closure – Successful Financial year end close in FO and MO applications. All year end critical issues resolved and closed',
    'Achieved  Zero CORES Out standing amount as  with no error policies for  the first time',
    'Manual monitored Genius job lock issue to avoid the slowness issues during the close out period',
    'AEGIS-Genius Slowness Issue : Genius locking issue reported. Live job details shared with Xuber for analysis. Awaiting feedback',
    'Reporting period advance issue (INC4568812 (P2):  BR0019 Brazil company code job locking analyzed in Global Genius. Issue resolved',
  ];

  constructor(public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
