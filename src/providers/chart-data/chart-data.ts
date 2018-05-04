import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {chartLegendConfig, mapDataToGroups } from '../../assets/data/apiRespChartsNames';
import { ChartData } from '../../models/chartData';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class ChartDataProvider {

  weeksArray: Array<string>;
  staticData: any;

  constructor(public http: Http) {
    //console.log('constructor called here');
  }

  load(){console.log('%cLoading Start', 'font-size: 20px; color: red;')
    this.http.get('./assets/data/result1.json').subscribe(res => {
    //this.http.get('http://13.59.71.199:80/getIncidentsMetrics').subscribe(res => {
      //this.http.get('http://localhost:5008/webhook').subscribe(res => {

      let result = res.json();
      //alert(result);
      console.log(result);
      this.staticData = result;
      this.weeksArray = this.normalizeWeeks(result["weekArray"]);
      //console.log('%cLoading Done', 'font-size: 20px; color: blue;')
    });
          }

         

  normalizeWeeks(weeksArr: Array<string>) {
          return weeksArr.map(x => x.split(" ")[1]);
  }

  getGroupData(groupName: string) {
    //TODO: check if staticData is undefined
    //console.log('getGroupDataCalledNow');
    let chartData: Array<ChartData> = [];

    try {

      //console.log('MAP-> ', mapDataToGroups[groupName]);  
      mapDataToGroups[groupName].forEach((chartName) => {
        //console.log(chartName);
        //console.log('staticData Required Now');
        Object.keys(this.staticData[chartName]).map(apiGroupName => {
          if (apiGroupName.toLocaleLowerCase().includes(groupName)) {
            //console.log(`%c${chartName} ->`, 'color: green;', this.staticData[chartName][apiGroupName]);
            let content = [];

            chartLegendConfig[chartName].map((legend) => {
              if ((this.staticData[chartName][apiGroupName][legend]).length !== 0) {
                content.push(this.staticData[chartName][apiGroupName][legend]);
              }
            });

            chartData.push({
              chartName,
              content,
              weeks: this.weeksArray
            });

          }
        });
      });

    } catch (e) { console.error(e); 
      console.log('Exception caught ' + e);
    //this.load();
  }

    return chartData;
  }

}


/**
 * .subscribe(res => {
                                                                    console.log(res.status);
                                                                    let result = res.json();
                                                                    console.log(result)
                                                                    this.staticData = result;
                                                                    this.weeksArray = this.normalizeWeeks(result["weekArray"]);
                                                                    console.log('%cLoading Done', 'font-size: 20px; color: blue;')
                                                      }
                                                      
                                                      
                                                      )
 * 
 * 
 * 
 * 
 * 
 * 
 */