import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import Group from '../../models/group';
import groups from '../../assets/data/groups';

@Injectable()
export class GroupSelectionProvider {

  initalValue: Group = groups[0];
  selectedGroup: Group;
  _groupChanges: BehaviorSubject<Group>;

  constructor(public http: Http) {
    this._groupChanges = new BehaviorSubject<Group>(this.initalValue);
    this.selectedGroup = this.initalValue;
  }

  get currentGroup(): Observable<Group> {
    return this._groupChanges.asObservable();
  }

  getAllGroups(): Array<Group> {
    return groups;
  }

  getSelectedGroup(): Group {
    return this.selectedGroup;
  }


  setGroup(value: string) {
    if (this.selectedGroup.value !== value) {
      this.selectedGroup = this.getGroupFromValue(value);
      this._groupChanges.next(this.selectedGroup);
    }
  }

  /**UTIL */

  getGroupFromValue(value: string): Group {
    let group: Group;
    groups.forEach((g) => {
      if (g.value === value) group = g;
    });
    return group;
  }
}
