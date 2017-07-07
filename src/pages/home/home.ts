import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import Chart from 'chart.js';
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
    let ctx: CanvasRenderingContext2D = (<HTMLCanvasElement>this.activeIncidentsChart.nativeElement).getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
        datasets: [{
          label: 'New',
          data: [141, 101, 87, 142, 76, 134, 151, 79, 95, 101],
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
          label: 'Closed',
          data: [131, 115, 121, 129, 99, 120, 153, 121, 91, 95],
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
          label: 'Active',
          data: [162, 143, 122, 137, 113, 128, 126, 85, 89, 93],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          type: 'line'
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 12,
            fontColor: 'rgb(255, 255, 255)'
          }
        },
        maintainAspectRatio: true,
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(69, 90, 100, 0.6)"
            },
            ticks: {
              fontColor: "white",
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              fontColor: "white",
              fontSize: 16,
              labelString: 'Week'
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(69, 90, 100, 0.6)"
            },
            ticks: {
              fontColor: "white",
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              fontColor: "white",
              fontSize: 16,
              labelString: 'No. of Incidents'
            }
          }]
        }
      }
    });

    ctx = (<HTMLCanvasElement>this.activeEnhancementsChart.nativeElement).getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
        datasets: [{
          label: 'New',
          data: [6, 8, 4, 6, 11, 6, 6, 10, 8, 8],
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
          label: 'Closed',
          data: [6, 7, 5, 4, 2, 16, 0, 5, 19, 5],
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
          label: 'Active- IT Change',
          data: [115, 114, 109, 110, 112, 113, 115, 117, 112, 113],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          type: 'line'
        },
        {
          label: 'Active - Bugs',
          data: [118, 114, 117, 118, 125, 112, 117, 120, 114, 115],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          type: 'line'
        }]
      },
      options: {
        legend: {
          display: true,
          labels: {
            boxWidth: 12,
            fontColor: 'rgb(255, 255, 255)'
          }
        },
        maintainAspectRatio: true,
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(69, 90, 100, 0.6)"
            },
            ticks: {
              fontColor: "white",
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              fontColor: "white",
              fontSize: 16,
              labelString: 'Week'
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(69, 90, 100, 0.6)"
            },
            ticks: {
              fontColor: "white",
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              fontColor: "white",
              fontSize: 16,
              labelString: 'No. of Enhancements'
            }
          }]
        }
      }
    });


    ctx = (<HTMLCanvasElement>this.serviceRequestsChart.nativeElement).getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
        datasets: [{
          label: 'New',
          data: [63, 65, 43, 58, 44, 45, 57, 42, 60, 54],
          backgroundColor: [
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)'
          ],
          borderColor: [
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)',
            'rgba(239, 108, 0, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Closed',
          data: [78, 86, 54, 47, 55, 49, 70, 39, 65, 72],
          backgroundColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Active',
          data: [135, 139, 130, 148, 135, 131, 117, 123, 120, 109],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          type: 'line'
        }]
      },
      options: {
        legend: {
          display: true,
          labels: {
            boxWidth: 12,
            fontColor: 'rgb(255, 255, 255)'
          }
        },
        maintainAspectRatio: true,
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(69, 90, 100, 0.6)"
            },
            ticks: {
              fontColor: "white",
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              fontColor: "white",
              fontSize: 16,
              labelString: 'Week'
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(69, 90, 100, 0.6)"
            },
            ticks: {
              fontColor: "white",
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              fontColor: "white",
              fontSize: 16,
              labelString: 'No. of Service Requests'
            }
          }]
        }
      }
    });


    ctx = (<HTMLCanvasElement>this.agingTrendChart.nativeElement).getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9"],
        datasets: [{
          label: 'Awaiting User Info',
          data: [28, 28, 28, 29, 27, 21, 23, 20, 12, 14],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)'
        }, {
          label: '12 weeks aging',
          data: [5, 3, 3, 3, 4, 4, 3, 0, 0, 0],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          type: 'line'
        },
        {
          label: '>4 and <12 weeks aging',
          data: [19, 18, 17, 15, 18, 14, 15, 9, 9, 11],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          type: 'line'
        },
        {
          label: '1 week aging',
          data: [83, 89, 77, 64, 70, 63, 62, 44, 35, 40],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          type: 'line'
        }],
      },
      options: {
        legend: {
          display: true,
          labels: {
            boxWidth: 12,
            fontColor: 'rgb(255, 255, 255)'
          }
        },
        maintainAspectRatio: true,
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(69, 90, 100, 0.6)"
            },
            ticks: {
              fontColor: "white",
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              fontColor: "white",
              fontSize: 16,
              labelString: 'Week'
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(69, 90, 100, 0.6)"
            },
            ticks: {
              fontColor: "white",
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              fontColor: "white",
              fontSize: 16,
              labelString: 'No. of Incidents'
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
    console.log('did load');
    //this.drawNewChart();
    this.drawOtherCharts();
  }

  drawOtherCharts() {
    // this.chartService.newDataObservable.subscribe((chartData) => {
    //   if (this.chart === null) {
    //     //first time generate chart
    //     this.chart = c3.generate(this.loadChart(this.activeIncidentsChart, chartData));
    //   } else {
    //     setTimeout(() => { this.loadNewData(this.chart, chartData); }, 500);
    //   }
    // });


    c3.generate({
      bindto: this.activeIncidentsChart.nativeElement,
      data: {
        names: {
          '1': 'New',
          '2': 'Closed',
          '3': 'Active'
        },
        columns: [
          ['1', 141, 101, 87, 142, 76, 134, 151, 79, 95, 101],
          ['2', 131, 115, 121, 129, 99, 120, 153, 121, 91, 95],
          ['3', 162, 143, 122, 137, 113, 128, 126, 85, 89, 93],
        ],
        type: 'bar',
        types: {
          '3': 'area-spline',
          '2': 'bar',
          '1': 'bar'
        },
        colors: {
          '1': '#03A9F4',
          '2': '#FFD54F',
          '3': '#FB8C00'
        }
      },
      legend: {
        position: 'bottom'
      },
      axis: {
        x: {
          type: 'category',
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
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
    });

    c3.generate({
      bindto: this.activeEnhancementsChart.nativeElement,
      data: {
        names: {
          '1': 'New',
          '2': 'Closed',
          '3': 'Active- IT Change',
          '4': 'Active - Bugs'
        },
        columns: [
          ['1', 6, 8, 4, 6, 11, 6, 6, 10, 8, 8],
          ['2', 6, 7, 5, 4, 2, 16, 0, 5, 19, 5],
          ['3', 115, 114, 109, 110, 112, 113, 115, 117, 112, 113],
          ['4', 118, 114, 117, 118, 125, 112, 117, 120, 114, 115]
        ],
        type: 'bar',
        types: {
          '2': 'bar',
          '3': 'area-spline',
          '4': 'area-spline'
        },
        colors: {
          '1': '#ff6384',
          '2': '#ffce56',
          '3': '#ef6c00',
          '4': '#36a2eb',
        }
      },
      axis: {
        x: {
          type: 'category',
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: {
            text: 'Weeks',
            position: 'outer-center'
          }
        },
        y: {
          label: {
            text: 'No. of Enhancements',
            position: 'outer-middle'
          }
        }
      },
      legend: {
        position: 'bottom'
      }
    });


    c3.generate({
      bindto: this.serviceRequestsChart.nativeElement,
      data: {
        names: {
          '1': 'New',
          '2': 'Closed',
          '3': 'Active'
        },
        columns: [
          ['1', 63, 65, 43, 58, 44, 45, 57, 42, 60, 54],
          ['2', 78, 86, 54, 47, 55, 49, 70, 39, 65, 72],
          ['3', 135, 139, 130, 148, 135, 131, 117, 123, 120, 109],
        ],
        types: {
          '2': 'area-spline',
          '3': 'area-spline',
          '1': 'bar'
        },
        type: 'bar',
        colors: {
          '1': '#ffce56',
          '2': '#36a2eb',
          '3': '#ff6384',
        }
      },
      axis: {
        x: {
          type: 'category',
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          label: {
            text: 'Weeks',
            position: 'outer-center'
          }
        },
        y: {
          label: {
            text: 'No. of Service Requests',
            position: 'outer-middle'
          }
        }
      },
      legend: {
        position: 'bottom'
      }
    });

    c3.generate({
      bindto: this.agingTrendChart.nativeElement,
      data: {
        names: {
          '1': 'Awaiting User Info',
          '2': '12 weeks aging',
          '3': '>4 and <12 weeks aging',
          '4': '1 week aging'
        },
        columns: [
          ['1', 28, 28, 28, 29, 27, 21, 23, 20, 12, 14],
          ['2', 5, 3, 3, 3, 4, 4, 3, 0, 0, 0],
          ['3', 19, 18, 17, 15, 18, 14, 15, 9, 9, 11],
          ['4', 83, 89, 77, 64, 70, 63, 62, 44, 35, 40],
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
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
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
      },
      legend: {
        position: 'bottom'
      }
    });

  }

  showScoreCard() {
    this.navCtrl.push(ScoreCardPage);
  }

}
