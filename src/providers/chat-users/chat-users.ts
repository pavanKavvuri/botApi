import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ChatUsersProvider {

  constructor(public http: Http) {
    // this.http.get('https://api.randomuser.me/?nat=us&results=12').subscribe(res => {
    //   //console.log(res.json().results);
    // });
  }

  getUsers() {
    return this.http
      .get('https://api.randomuser.me/?nat=us&results=20')
      .map(res => res.json().results);
  }

}
