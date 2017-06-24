import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScoreCardDataProvider } from '../../providers/score-card-data/score-card-data';
import { GroupScoreCard } from '../../models/scoreCard';

import c3 from 'c3';

@Component({
  selector: 'page-score-card',
  templateUrl: 'score-card.html',
})
export class ScoreCardPage {

  @ViewChild('scoreCardChart') scoreCardChart: ElementRef;

  scoreCard: GroupScoreCard = {
    scoreCard: []
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private dataSource: ScoreCardDataProvider) {

  }

  ngOnInit() {
    this.dataSource.scoreCardData.subscribe(val => {
      this.scoreCard = val;
    });
  }

  ionViewDidLoad() {

    c3.generate({
      bindto: this.scoreCardChart.nativeElement,
      data: {
        names: {
          'data1': 'Inflow',
          'data2': 'Closed',
          'data3': 'Active',
          'data4': '>30 Days',
        },
        columns: [
          ['data1', 30, 20, 50, 40, 30, 20, 50, 40, 10, 20],
          ['data2', 200, 130, 200, 130, 90, 240, 200, 130, 90, 240],
          ['data3', 300, 200, 160, 400, 200, 160, 400, 200, 160, 400],
          ['data4', 200, 130, 90, 200, 130, 90, 200, 130, 90, 240],
        ],
        type: 'line',
        types: {
          data2: 'line',
          data3: 'line',
          data4: 'line'
        },
      },
      axis: {
        x: {
          type: 'category',
          categories: ['FOAM – AMANDA',
            'FOAM – AZUR',
            'FOAM – BIRT',
            'FOAM – CORES',
            'FOAM - DE APPS',
            'FOAM – GPS',
            'FOAM - GREAT',
            'FOAM - UNION',
            'FOAM - FR-APPS',
            'FOAM - myAGCS'],
          label: {
            text: 'Assignment Groups',
            position: 'outer-center'
          }
        },
        y: {
          label: {
            text: 'Incidents',
            position: 'outer-middle'
          }
        }
      }
    });
  }

}
