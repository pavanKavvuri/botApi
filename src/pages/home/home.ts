import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import c3 from 'c3';

import { ScoreCardPage } from '../score-card/score-card';

import { ChartProvider } from '../../providers/chart/chart';
import { ActiveIncidents } from '../../models/weeklyMetrices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('activeIncidentsChart') activeIncidentsChart: ElementRef;
  @ViewChild('activeEnhancementsChart') activeEnhancementsChart: ElementRef;
  @ViewChild('serviceRequestsChart') serviceRequestsChart: ElementRef;
  @ViewChild('agingTrendChart') agingTrendChart: ElementRef;

  updates: Array<string> = [];
  segment: string = 'week';
  chart: any = null;

  constructor(public navCtrl: NavController,
    public chartService: ChartProvider) {


    this.updates = [
      'Lorem ipsum ...',
      'Lorem ipsum ...',
      'Lorem ipsum ...',
      'Lorem ipsum ...',
      'Lorem ipsum ...',
      'Lorem ipsum ...',
      'Lorem ipsum ...'
    ];
    
  }

  loadChart(elementRef: ElementRef, activeIncidents: ActiveIncidents) {
    return {
      bindto: elementRef.nativeElement,
      data: {
        names: {
          '1': 'New',
          '2': 'Closed',
          '3': 'Active'
        },
        columns: [
          ['1', ...activeIncidents.newIncidents],
          ['2', ...activeIncidents.closedIncidents],
          ['3', ...activeIncidents.active]
        ],
        type: 'bar',
        types: {
          '3': 'line'
        }
      },
      legend: {
        position: 'right'
      },
      axis: {
        x: {
          type: 'category',
          categories: ['1-7', '8-14', 'x-y', 'a-b', 'c-d', 'e-f'],
          //categories: this.getIntervalsForChart(this.activeIncidents.weeks),
          label: {
            text: 'Weeks',
            position: 'outer-center'
          }
        },
        y: {
          label: {
            text: 'No. of Incidents',
            position: 'outer-middle'
          }
        }
      }
    }
  }

  loadNewData(chart: any, activeIncidents: ActiveIncidents) {
    this.chart.unload({
      done: () => {
        chart.load({
          columns: [
            ['1', ...activeIncidents.newIncidents],
            ['2', ...activeIncidents.closedIncidents],
            ['3', ...activeIncidents.active]
          ],
          type: 'bar',
          types: {
            '3': 'line'
          }
        });
      }
    });
  }

  ionViewDidLoad() {

    this.chartService.newDataObservable.subscribe((chartData) => {
      if (this.chart === null) {
        //first time generate chart
        this.chart = c3.generate(this.loadChart(this.activeIncidentsChart, chartData));
      } else {
        setTimeout(() => { this.loadNewData(this.chart, chartData); }, 500);
      }
    });


    // c3.generate({
    //   bindto: this.activeIncidentsChart.nativeElement,
    //   data: {
    //     names: {
    //       '1': 'New',
    //       '2': 'Closed',
    //       '3': 'Active'
    //     },
    //     columns: [
    //       ['1', 30, 20, 50, 40, 60, 50],
    //       ['2', 200, 130, 90, 240, 130, 220],
    //       ['3', 300, 200, 160, 400, 250, 250],
    //     ],
    //     type: 'bar',
    //     types: {
    //       '3': 'line'
    //     }
    //   },
    //   legend: {
    //     position: 'right'
    //   },
    //   axis: {
    //     x: {
    //       type: 'category',
    //       categories: ['1-7', '8-14', 'x-y', 'a-b', 'c-d', 'e-f'],
    //       label: {
    //         text: 'Weeks',
    //         position: 'outer-center'
    //       }
    //     },
    //     y: {
    //       label: {
    //         text: 'No. of Incidents',
    //         position: 'outer-middle'
    //       }
    //     }
    //   }
    // });

    c3.generate({
      bindto: this.activeEnhancementsChart.nativeElement,
      data: {
        columns: [
          ['data1', 30, 20, 50, 40, 60, 50],
          ['data2', 200, 130, 90, 240, 130, 220],
          ['data3', 300, 200, 160, 400, 250, 250],
          ['data4', 200, 130, 90, 240, 130, 220],
          ['data5', 130, 120, 150, 140, 160, 150],
        ],
        type: 'bar',
        types: {
          data3: 'line',
          data4: 'line',
          data5: 'line',
        }
      }
    });


    c3.generate({
      bindto: this.serviceRequestsChart.nativeElement,
      data: {
        columns: [
          ['data1', 30, 20, 50, 40, 60, 50],
          ['data2', 200, 130, 90, 240, 130, 220],
          ['data3', 300, 200, 160, 400, 250, 250],
        ],
        type: 'bar',
        types: {
          data3: 'line'
        }
      }
    });

    c3.generate({
      bindto: this.agingTrendChart.nativeElement,
      data: {
        columns: [
          ['data1', 30, 20, 50, 40, 60, 50],
          ['data2', 200, 130, 90, 240, 130, 220],
          ['data3', 300, 200, 160, 400, 250, 250],
          ['data4', 200, 130, 90, 240, 130, 220],
        ],
        type: 'line',
        types: {
          data2: 'line',
          data3: 'line',
          data4: 'line'
        }
      }
    });


  }

  showScoreCard() {
    this.navCtrl.push(ScoreCardPage);
  }

}
