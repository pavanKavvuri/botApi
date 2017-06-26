import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {  Interval, ActiveIncidents, ActiveEnhancemnets, ActiveServiceRequests, Aging  } from '../../models/weeklyMetrices';

@Injectable()
export class DataProvider {

  //activeIncidentsData: ActiveIncidents;
  activeEnhancemnetsData: ActiveEnhancemnets;
  activeSerViceRequests: ActiveServiceRequests;
  aging: Aging;

  _activeIncidentsData: BehaviorSubject<ActiveIncidents>;

  constructor(public http: Http) {
  
  }



}
