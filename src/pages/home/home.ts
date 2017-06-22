import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import c3 from 'c3';

import { ChartProvider } from '../../providers/chart/chart';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('activeIncidentsChart') activeIncidentsChart: ElementRef;
  @ViewChild('activeEnhancementsChart') activeEnhancementsChart: ElementRef;
  @ViewChild('serviceRequestsChart') serviceRequestsChart: ElementRef;
  @ViewChild('agingTrendChart') agingTrendChart: ElementRef;

  constructor(public navCtrl: NavController, public chartService: ChartProvider) {

  }

  ionViewDidLoad() {

    

  c3.generate({
    bindto: this.activeIncidentsChart.nativeElement,
    data: {
      names: {
        '1': 'New',
        '2': 'Closed',
        '3': 'Active'
      },
      columns: [
        ['1', 30, 20, 50, 40, 60, 50],
        ['2', 200, 130, 90, 240, 130, 220],
        ['3', 300, 200, 160, 400, 250, 250],
      ],
      type: 'bar',
      types: {
        '3': 'line'
      }
    },
    axis: {
      x: {
        label: {
          text: 'Your X Axis',
          position: 'outer-center'
        }
      },
      y: {
        label: {
          text: 'Your Y Axis',
          position: 'outer-middle'
        }
      }
    }
  });

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

}
