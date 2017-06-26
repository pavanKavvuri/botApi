import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Interval, ActiveIncidents, ActiveEnhancemnets, ActiveServiceRequests, Aging } from '../../models/weeklyMetrices';


@Injectable()
export class ChartProvider {

  activeIncidents: ActiveIncidents
  _newDataSubject: BehaviorSubject<ActiveIncidents>;

  constructor(public http: Http) {
    this.activeIncidents = {
      weeks: [],
      newIncidents: [],
      active: [],
      closedIncidents: []
    };

    this._newDataSubject = new BehaviorSubject<ActiveIncidents>(this.activeIncidents);

    this.http.get('./assets/data/activeIncidentsData.json').subscribe(data => {
      this.activeIncidents = <ActiveIncidents>JSON.parse(data.text());
      this._newDataSubject.next(Object.assign({}, this.activeIncidents));
    });
  }

  get newDataObservable() {
    return this._newDataSubject.asObservable();
  }

  getIntervalsForChart(weekArray: Array< Interval>): Array<string> {
    let intervalArray: Array<string> = [];
    for (let i = 0; i < weekArray.length; i++) {
      intervalArray.push("" + weekArray[i].start + "-" + weekArray[i].end);
    }
    return intervalArray;
  }
}
