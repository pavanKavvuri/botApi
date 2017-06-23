import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GroupScoreCard, IncidentScoreCard, EnhancementScoreCard, ServiceReqScoreCard } from '../../models/scoreCard';

@Injectable()
export class ScoreCardDataProvider {


  incidents: IncidentScoreCard = {
    inflow: '7',
    closed: '10',
    active: '1',
    gt30Days: '-'
  };

  enhancements: EnhancementScoreCard = {
    activeBugs: '15',
    activeITChanges: '14',
    activeBusinessChanges: '11',
    closed: '2'
  };

  servicereq: ServiceReqScoreCard = {
    inflow: '2',
    closed: '5',
    active: '9',
    gt30Days: '3'
  };

  groupScoreCard: GroupScoreCard = {
    scoreCard: [
      {
        groupName: 'FOAM – AMANDA',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM – ARCNET',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM – AZUR',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM – BIRT',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM – CORES',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM - DE APPS',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM – GPS',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM - GREAT',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM - UNION',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM - FR-APPS',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM - myAGCS',
        incidentScoreCard: this.incidents,
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },


    ]
  };

  scoreCardDataSource: Observable<GroupScoreCard>;

  constructor(public http: Http) {
    this.scoreCardDataSource = new Observable<GroupScoreCard>(observer => {
      setTimeout(() => { observer.next(this.groupScoreCard) }, 100);
    });
  }

  get scoreCardData() {
    return this.scoreCardDataSource;
  }

}
