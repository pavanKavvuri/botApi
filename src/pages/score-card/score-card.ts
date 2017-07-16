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
    'Azure JBOSS EAP 6.4 Post go-live upgrade status',
    'Bowne Server Migration',
    'Imbalance between SAP and Cognos report',
    'Aging Status - 11 incidents',
    'CIO Dashboard status',
    'Release 2G live'
  ];

  incidentsData = {
    names: {
      '1': 'Inflow',
      '2': 'Closed',
      '3': 'Active',
      '4': '>30 Days'
    },
    data: [
      [5, 3, 3, 0, 8, 0, 0, 0, 0, 5, 1],
      [10, 1, 1, 0, 11, 0, 2, 0, 0, 9, 1],
      [3, 2, 3, 0, 9, 0, 0, 1, 0, 2, 0],
      [0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0]
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
      [17, 0, 0, 0, 17, 2, 3, 2, 0, 16, 0],
      [14, 1, 5, 0, 26, 1, 4, 3, 3, 13, 1],
      [11, 1, 2, 0, 6, 0, 0, 2, 1, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0]
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
      [6, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
      [10, 0, 0, 0, 1, 0, 2, 0, 0, 2, 0],
      [12, 1, 5, 0, 27, 1, 2, 2, 0, 3, 0],
      [4, 1, 2, 0, 25, 1, 2, 1, 0, 2, 0]
    ],
    yaxis: 'No. of Service Requests'
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {

  }

  ionViewDidLoad() {

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
