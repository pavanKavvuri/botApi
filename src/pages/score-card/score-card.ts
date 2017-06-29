import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScoreCardDataProvider } from '../../providers/score-card-data/score-card-data';
import { GroupScoreCard } from '../../models/scoreCard';

import Chart from 'chart.js';

@Component({
  selector: 'page-score-card',
  templateUrl: 'score-card.html',
})
export class ScoreCardPage {


  @ViewChild('scoreCardChart') scoreCardChart: ElementRef;

  listColors: Array<string> = [
    '#3fc2c6',
    '#c63f8b',
    '#fbe08d',
    '#7847d0'
  ];

  keyUpdates: Array<string> = [
    'Azure JBOSS EAP 6.4 Post go-live upgrade status',
    'Bowne Server Migration',
    'Imbalance between SAP and Cognos report',
    'Aging Status - 11 incidents',
    'CIO Dashboard status',
    'Release 2G live'
  ];

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

    let ctx = (<HTMLCanvasElement>document.getElementById("myScoreCardChart")).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Line 1 Dataset',
          data: [45, 26, 30, 15],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ]
        },
        {
          label: 'Line 2 Dataset',
          data: [50, 40, 30, 50],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)'
          ],
          type: 'line'
        },
        {
          label: 'Line 3 Dataset',
          data: [15, 25, 11, 40],
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)'
          ],
          type: 'line'
        }],
        labels: ['January', 'February', 'March', 'April']
      },
      options: {
        legend: {
          display: true,
          labels: {
            fontColor: 'rgb(255, 255, 255)'
          }
        },
        maintainAspectRatio: true,
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              fontColor: "white",
              beginAtZero: true
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: "white",
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
