import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Chart } from 'chart.js';

@Injectable()
export class ChartProvider {

  constructor(public http: Http) {
    console.log('Hello ChartProvider Provider');
  }

}
