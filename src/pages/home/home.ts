import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import c3 from 'c3';

import { ScoreCardPage } from '../score-card/score-card';
import { ChatPage } from '../chat/chat';

import { GroupSelectionProvider } from '../../providers/group-selection/group-selection';

import Group from '../../models/group';

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
    public toastCtrl: ToastController,
    public groupSelectionService: GroupSelectionProvider) {

    this.groupSelectionService.currentGroup.subscribe((group: Group) => {

    });
  }


  ionViewDidLoad() {
    //this.drawNewChart();
    this.drawOtherCharts();
  }


  drawOtherCharts() {

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

  onNotifClick() {
    let toast = this.toastCtrl.create({
      message: 'Coming soon ...',
      duration: 2000
    });
    toast.present();
  }
  onChatClick() {
    this.navCtrl.push(ChatPage);
  }
}
