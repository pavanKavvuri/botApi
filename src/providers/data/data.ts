import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Interval, ActiveIncidents, ActiveEnhancemnets, ActiveServiceRequests, Aging } from '../../models/weeklyMatrics';

@Injectable()
export class DataProvider {

//activeIncidentsData: ActiveIncidents;
activeEnhancemnetsData: ActiveEnhancemnets;
activeSerViceRequests: ActiveServiceRequests;
aging: Aging;

_activeIncidentsData: BehaviorSubject<ActiveIncidents>;

  constructor(public http: Http) {
    this._activeIncidentsData = <BehaviorSubject<ActiveIncidents>>new BehaviorSubject<ActiveIncidents>({"weeks":[],"new":[],"active":[],"closed":[]});

    console.log('Hello DataProvider Provider');
    this.loadStaticData();
  }


    /**
  * Get static data from the JSON
  */
  loadStaticData() {

    this.http.get('./assets/data/activeIncidentsData.json').subscribe(data => {

      // this.staticData = <IData>JSON.parse(data.text());
       console.log(JSON.stringify(JSON.parse(data.text())));

      this._activeIncidentsData.next(Object.assign({}, <ActiveIncidents>JSON.parse(data.text())));
    });
  }

   /**
 * getter for activeIncidents Data as observable
 */

  get activeIncidentsData() {
    return this._activeIncidentsData.asObservable();
  }

}
