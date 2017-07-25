import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import c3 from 'c3';

@Component({
  selector: 'page-score-card',
  templateUrl: 'score-card.html',
})
export class ScoreCardPage {


  @ViewChild('scoreCardChart') scoreCardChart: ElementRef;

  chart: any = null;

  listColors: Array<string> = [
    '#3fc2c6',
    '#c63f8b',
    '#fbe08d',
    '#7847d0'
  ];

  keyUpdates: Array<string> = [
    'Active Request is High in FR local apps due to 4 Requests for Business confirmation to close , 3 Awaiting Implementation and  3 are  analyzing  with Genius team on cash processing issues.',
    'AMANDA UK- Closed 60% of the requests. Focusing on the closure of pending requests which are related to data amendment',
    // 'Azure JBOSS EAP 6.4 Post go-live upgrade status',
    // 'Bowne Server Migration',
    // 'Imbalance between SAP and Cognos report',
    // 'Aging Status - 11 incidents',
    // 'CIO Dashboard status',
    // 'Release 2G live'
  ];

  incidentsData = {
    names: {
      '1': 'Inflow',
      '2': 'Closed',
      '3': 'Active',
      '4': '>30 Days'
    },
    data: [
      [7, 0, 2, 0, 11, 1, 1, 0, 0, 4, 0],
      [6, 0, 1, 0, 7, 0, 0, 0, 0, 0, 0],
      [5, 1, 2, 0, 17, 1, 1, 0, 0, 10, 1],
      [0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 1]
    ],
    yaxis: 'No. of Incidents'
  }

  enhancementsData = {
    names: {
      '1': 'Active Bugs',
      '2': 'Active IT Changes',
      '3': 'Active Business Changes',
      '4': 'Closed'
    },
    data: [
      [16, 1, 1, 0, 17, 0, 3, 2, 0, 16, 0],
      [15, 0, 6, 1, 27, 1, 2, 4, 3, 17, 1],
      [6, 1, 2, 2, 7, 0, 0, 2, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
    ],
    yaxis: 'No. of Enhancements'
  }

  srData = {
    names: {
      '1': 'Inflow',
      '2': 'Closed',
      '3': 'Active',
      '4': '>30 Days'
    },
    data: [
      [4, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [10, 0, 3, 0, 22, 1, 3, 2, 1, 2, 0],
      [4, 0, 3, 0, 20, 1, 2, 2, 0, 1, 0]
    ],
    yaxis: 'No. of Service Requests'
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {

  }

  ionViewDidLoad() {
    setTimeout(() => { this.drawGraph() }, 500);
  }


  drawGraph() {

    let kpi = this.navParams.get('kpi');
    let data = null;
    let names = null;
    let yaxis = null;

    console.log('KPI -> ', kpi);

    switch (kpi) {
      case 'incident':
        data = this.incidentsData.data;
        names = this.incidentsData.names;
        yaxis = this.incidentsData.yaxis;
        break;
      case 'enhancement':
        data = this.enhancementsData.data;
        names = this.enhancementsData.names;
        yaxis = this.enhancementsData.yaxis
        break;
      case 'sr':
        data = this.srData.data;
        names = this.srData.names;
        yaxis = this.srData.yaxis
        break;
    }


    this.chart = c3.generate({
      bindto: this.scoreCardChart.nativeElement,
      data: {
        names,
        columns: [
          ['1', ...data[0]],
          ['2', ...data[1]],
          ['3', ...data[2]],
          ['4', ...data[3]],
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
        },
        y: {
          label: {
            text: yaxis,
            position: 'outer-middle'
          }
        }
      },
      legend: {
        position: 'bottom'
      }
    });
  }

}
