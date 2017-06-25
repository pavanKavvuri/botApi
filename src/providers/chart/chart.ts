import { Injectable, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { DataProvider } from '../../providers/data/data';
import { Interval, ActiveIncidents, ActiveEnhancemnets, ActiveServiceRequests, Aging } from '../../models/weeklyMatrics';


/**
 * API response 
 * {
 *    weeks: {[ start: '', end: '']},
 *    new: [-,-,-,-,-],
 *    closed: [-,-,-,-,],
 *    active: [-,-,-,-,]
 * }
 * 
 */
@Injectable()
export class ChartProvider {

  activeIncidents: ActiveIncidents

  constructor(public http: Http, public dataProvider: DataProvider) {
    this.dataProvider.activeIncidentsData.subscribe((activeIncidents: ActiveIncidents) =>{
      this.activeIncidents = activeIncidents;
      console.log(this.activeIncidents);
    });
  }

  getIncidentsChart(elementRef: ElementRef) {
    return {
      bindto: elementRef.nativeElement,
      data: {
        names: {
          '1': 'New',
          '2': 'Closed',
          '3': 'Active'
        },
        columns: [
          ['1', 30, 20, 50, 40, 60, 50],
          // ['1', ...this.activeIncidents.new],
          // ['2', 200, 130, 90, 240, 130, 220],
          ['2', ...this.activeIncidents.closed],
          // ['3', 300, 200, 160, 400, 250, 250],
          ['3', ...this.activeIncidents.active],

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
}
