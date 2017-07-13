import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GroupScoreCard } from '../../models/scoreCard';

import c3 from 'c3';

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
    public navParams: NavParams) {

  }

  ionViewDidLoad() {
    c3.generate({
      bindto: this.scoreCardChart.nativeElement,
      data: {
        names: {
          '1': 'Awaiting User Info',
          '2': '12 weeks aging',
          '3': '>4 and <12 weeks aging',
          '4': '1 week aging'
        },
        columns: [
          ['1', 5, 3, 3, 0, 8, 0, 0, 0, 0, 5, 1],
          ['2', 10, 1, 1, 0, 11, 0, 2, 0, 0, 9, 1],
          ['3', 3, 2, 3, 0, 9, 0, 0, 1, 0, 2, 0],
          ['4', 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0],
        ],
        type: 'area-spline',
        types: {
          '2': 'area-spline',
          '3': 'area-spline',
          '4': 'area-spline'
        },
        colors: {
          '1': '#ffce56',
          '2': '#36a2eb',
          '3': '#ff6384',
          '4': '#ef6c00',
        }
      },
      axis: {
        x: {
          type: 'category',
          categories: [
            'AMANDA',
            'ARCNET',
            'AZUR',
            'BIRT',
            'CORES',
            'DE APPS',
            'GPS',
            'GREAT',
            'UNION',
            'FR-APPS',
            'myAGCS'],
          // label: {
          //   text: 'Weeks',
          //   position: 'outer-center'
          // }
        },
        y: {
          label: {
            text: 'No. of Incidents',
            position: 'outer-middle'
          }
        }
      },
      legend: {
        position: 'bottom'
      }
    });
  }


  // ionViewDidLoad() {

  //   let ctx = (<HTMLCanvasElement>document.getElementById("myScoreCardChart")).getContext('2d');
  //   new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: [
  //         'AMANDA',
  //         'ARCNET',
  //         'AZUR',
  //         'BIRT',
  //         'CORES',
  //         'DE APPS',
  //         'GPS',
  //         'GREAT',
  //         'UNION',
  //         'FR-APPS',
  //         'myAGCS',
  //       ],
  //       datasets: [{
  //         label: 'Inflow',
  //         data: [5, 3, 3, 0, 8, 0, 0, 0, 0, 5, 1],
  //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //         borderColor: 'rgba(255, 99, 132, 1)'
  //       }, {
  //         label: 'Closed',
  //         data: [10, 1, 1, 0, 11, 0, 2, 0, 0, 9, 1],
  //         backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //         borderColor: 'rgba(54, 162, 235, 1)',
  //         type: 'line'
  //       },
  //       {
  //         label: 'Active',
  //         data: [3, 2, 3, 0, 9, 0, 0, 1, 0, 2, 0],
  //         backgroundColor: 'rgba(255, 206, 86, 0.2)',
  //         borderColor: 'rgba(255, 206, 86, 1)',
  //         type: 'line'
  //       },
  //       {
  //         label: '>30 days',
  //         data: [0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0],
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         type: 'line'
  //       }],
  //     },
  //     options: {
  //       legend: {
  //         display: true,
  //         labels: {
  //           boxWidth: 12,
  //           fontColor: 'rgb(255, 255, 255)'
  //         }
  //       },
  //       maintainAspectRatio: true,
  //       responsive: true,
  //       scales: {
  //         xAxes: [{
  //           ticks: {
  //             fontColor: "white",
  //             beginAtZero: true
  //           },
  //           scaleLabel: {
  //             display: true,
  //             fontColor: "white",
  //             fontSize: 16,
  //             labelString: 'Week'
  //           }
  //         }],
  //         yAxes: [{
  //           ticks: {
  //             fontColor: "white",
  //             beginAtZero: true
  //           },
  //           scaleLabel: {
  //             display: true,
  //             fontColor: "white",
  //             fontSize: 16,
  //             labelString: 'No. of Incidents'
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

}
