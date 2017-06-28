import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import c3 from 'c3';
import Chart from 'chart.js';

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

  keyUpdates: Array<string> = [
    'Azure JBOSS EAP 6.4 Post go-live upgrade status',
    'Bowne Server Migration',
    'Imbalance between SAP and Cognos report',
    'Aging Status - 11 incidents',
    'CIO Dashboard status',
    'Release 2G live'
  ];

  segment: string = 'week';
  chart: any = null;
  listColors: Array<string> = [
    '#3fc2c6',
    '#c63f8b',
    '#fbe08d',
    '#7847d0'
  ];

  constructor(public navCtrl: NavController,
    public chartService: ChartProvider) {

  }

  drawNewChart() {
    let ctx: CanvasRenderingContext2D = (<HTMLCanvasElement>document.getElementById("myChart")).getContext('2d');

    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
        datasets: [{
          label: 'Closed Incidents',
          data: [12, 19, 3, 5, 2, 3, 1, 5, 8],
          backgroundColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'New Incidents',
          data: [4, 8, 13, 10, 12, 9, 12, 5, 18],
          backgroundColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
        },
        {
          label: 'Line Dataset',
          data: [50, 40, 30, 50],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 159, 64, 1)'
          ],
          type: 'line'
        }]
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

    ctx = (<HTMLCanvasElement>document.getElementById("myAreaChart")).getContext('2d');

    var myAreaChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(153, 102, 255, 1)'
          ]
        }]
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

    ctx = (<HTMLCanvasElement>document.getElementById("myDoughnutChart")).getContext('2d');

    var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
        }]
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

    ctx = (<HTMLCanvasElement>document.getElementById("myMixedChart")).getContext('2d');

    var myMixedChart = new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Bar Dataset',
          data: [10, 20, 30, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
        }, {
          label: 'Line Dataset',
          data: [50, 40, 30, 50],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 159, 64, 1)'
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
    this.drawNewChart();
    // this.drawOtherCharts();
  }

  drawOtherCharts() {
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
      },
      legend: {
        position: 'right'
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
      },
      legend: {
        position: 'right'
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
      },
      legend: {
        position: 'right'
      }
    });

  }

  showScoreCard() {
    this.navCtrl.push(ScoreCardPage);
  }

}
