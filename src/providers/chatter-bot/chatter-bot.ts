import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Rx';
/*
  Generated class for the ChatterBotProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatterBotProvider {

  constructor(public http: Http) {
    console.log('Hello ChatterBotProvider Provider');
  }



  //serData(a, b): Observable<any>{
  serData(a): Observable<any>{
  
  
  //let localURL = "http://localhost:3000/test";   //https://node-bot-api.herokuapp.com/
  let localURL = "https://node-bot-api.herokuapp.com/test"; 
  let pqr = "?quest=" + a;
  localURL = localURL.concat(pqr);
  
  return this.http.get(localURL)
                    .map(
                    res =>{
                      //alert("Inside GET");
                        const data = res.json();
                        console.log(data);
                        var pavan = JSON.stringify(data.result);
                        //alert(pavan);
                        return pavan.replace(/['"]+/g, '');

                          }); 

}

}
