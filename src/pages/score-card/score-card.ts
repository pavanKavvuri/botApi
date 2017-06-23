import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ScoreCardDataProvider } from '../../providers/score-card-data/score-card-data';
import { GroupScoreCard } from '../../models/scoreCard';

@IonicPage()
@Component({
  selector: 'page-score-card',
  templateUrl: 'score-card.html',
})
export class ScoreCardPage {

  //scoreCardData: Observable<GroupScoreCard>;
  scoreCard: GroupScoreCard = {
    scoreCard: []
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private dataSource: ScoreCardDataProvider) {

    // this.scoreCardData.subscribe(scoreCard => {
    //   //console.log('in subscribe');
    //   scoreCard.scoreCard.map(x => { console.log(x.groupName); });
    // });

  }

  ngOnInit() {
    this.dataSource.scoreCardData.subscribe(val => {
      this.scoreCard = val;
    });
  }

  ionViewDidLoad() {

  }

}
