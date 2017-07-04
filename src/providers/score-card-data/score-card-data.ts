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
        incidentScoreCard: {
          inflow: '5',
          closed: '10',
          active: '3',
          gt30Days: '-'
        },
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM – ARCNET',
        incidentScoreCard: {
          inflow: '3',
          closed: '1',
          active: '2',
          gt30Days: '-'
        },
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM – AZUR',
        incidentScoreCard: {
          inflow: '3',
          closed: '1',
          active: '3',
          gt30Days: '-'
        },
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM – BIRT',
        incidentScoreCard: {
          inflow: '-',
          closed: '-',
          active: '-',
          gt30Days: '-'
        },
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM – CORES',
        incidentScoreCard: {
          inflow: '8',
          closed: '11',
          active: '9',
          gt30Days: '2'
        },
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM - DE APPS',
        incidentScoreCard: {
          inflow: '-',
          closed: '-',
          active: '-',
          gt30Days: '-'
        },
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM – GPS',
        incidentScoreCard: {
          inflow: '-',
          closed: '2',
          active: '-',
          gt30Days: '-'
        },
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM - GREAT',
        incidentScoreCard: {
          inflow: '-',
          closed: '-',
          active: '1',
          gt30Days: '1'
        },
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM - UNION',
        incidentScoreCard: {
          inflow: '-',
          closed: '-',
          active: '-',
          gt30Days: '-'
        },
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM - FR-APPS',
        incidentScoreCard: {
          inflow: '5',
          closed: '9',
          active: '2',
          gt30Days: '-'
        },
        enhancementScoreCard: this.enhancements,
        serviceReqScoreCard: this.servicereq
      },
      {
        groupName: 'FOAM - myAGCS',
        incidentScoreCard: {
          inflow: '1',
          closed: '1',
          active: '-',
          gt30Days: '-'
        },
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
