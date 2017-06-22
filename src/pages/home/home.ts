import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

import c3 from 'c3';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('incidentsCanvas') incidentsCanvas;
  @ViewChild('mixedChartCanvas') mixedChartCanvas;
  @ViewChild('combinedChart') combinedChart;

  @ViewChild('dashboardChart') dashboardChart: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  incidentsChart: any;
  mixedChart: any

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {

    c3.generate({
      bindto: this.combinedChart.nativeElement,


      data: {
        columns: [
          ['data1', 30, 20, 50, 40, 60, 50],
          ['data2', 200, 130, 90, 240, 130, 220],
          ['data3', 300, 200, 160, 400, 250, 250],
          ['data4', 200, 130, 90, 240, 130, 220],
          ['data5', 130, 120, 150, 140, 160, 150],
          ['data6', 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        types: {
          data3: 'spline',
          data4: 'line',
          data6: 'area',
        },
        groups: [
          ['data1', 'data2']
        ]
      }
    });

  }

}
