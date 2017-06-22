import { Injectable, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import c3 from 'c3';

@Injectable()
export class ChartProvider {

  constructor(public http: Http) {

  }

  getChartFromConfig(elementRef: ElementRef) {
    console.log('generate chart -- ', elementRef);

    return c3.generate({
      bindto: elementRef.nativeElement,
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
  }

}
